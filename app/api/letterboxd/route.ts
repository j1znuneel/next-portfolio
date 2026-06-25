import { NextResponse } from "next/server";

interface LetterboxdEntry {
  title: string;
  link: string;
  filmTitle: string;
  filmYear: string;
  rating: number;
  watchedDate: string;
  posterUrl: string;
}

export async function GET() {
  try {
    const username = "j1znu_neel";
    const rssUrl = `https://letterboxd.com/${username}/rss/`;

    const response = await fetch(rssUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        "Accept":
          "application/rss+xml, application/xml, text/xml, */*",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`RSS fetch failed: ${response.status}`);
    }

    const xml = await response.text();

    // Parse RSS XML manually to extract diary entries
    const entries: LetterboxdEntry[] = [];
    const items = xml.split("<item>").slice(1); // Skip first split (before first item)

    for (const item of items) {
      // Only include diary entries (watched films), not reviews/lists
      const link = extractTag(item, "link");
      if (!link?.includes("/film/")) continue;

      const titleFull = extractTag(item, "title");
      const description = extractTag(item, "description");

      // Extract film title and year from the letterboxd:filmTitle and letterboxd:filmYear tags
      const filmTitle =
        extractTag(item, "letterboxd:filmTitle") ||
        titleFull?.replace(/,\s*\d{4}\s*(-\s*★.*)?$/, "").trim() ||
        "";
      const filmYear = extractTag(item, "letterboxd:filmYear") || "";

      // Extract rating from letterboxd:memberRating
      const ratingStr = extractTag(item, "letterboxd:memberRating");
      const rating = ratingStr ? parseFloat(ratingStr) : 0;

      // Extract watched date
      const watchedDate =
        extractTag(item, "letterboxd:watchedDate") ||
        extractTag(item, "pubDate") ||
        "";

      // Extract poster image from description HTML
      let posterUrl = "";
      if (description) {
        const imgMatch = description.match(/src="([^"]+)"/);
        if (imgMatch) {
          posterUrl = imgMatch[1];
        }
      }

      entries.push({
        title: titleFull || "",
        link: link || "",
        filmTitle,
        filmYear,
        rating,
        watchedDate,
        posterUrl,
      });

      if (entries.length >= 4) break;
    }

    return NextResponse.json({ entries }, { status: 200 });
  } catch (error) {
    console.error("Letterboxd fetch error:", error);
    return NextResponse.json(
      { entries: [], error: "Failed to fetch Letterboxd data" },
      { status: 500 }
    );
  }
}

function extractTag(xml: string, tagName: string): string | null {
  // Handle CDATA wrapped content
  const cdataRegex = new RegExp(
    `<${tagName}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tagName}>`,
    "i"
  );
  const cdataMatch = xml.match(cdataRegex);
  if (cdataMatch) return cdataMatch[1].trim();

  // Handle regular tag content
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)</${tagName}>`, "i");
  const match = xml.match(regex);
  return match ? match[1].trim() : null;
}
