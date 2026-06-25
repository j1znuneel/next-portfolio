import { NextResponse } from "next/server";

interface Contribution {
  date: string;
  level: number;
}

export async function GET() {
  try {
    const username = "j1znuneel";
    const response = await fetch(
      `https://github.com/users/${username}/contributions`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
          Accept: "text/html",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub fetch failed: ${response.status}`);
    }

    const html = await response.text();

    // Extract total contributions from the <h2> tag
    const totalMatch = html.match(
      /(\d[\d,]*)\s*\n?\s*contributions?\s*\n?\s*in the last year/i
    );
    const total = totalMatch
      ? parseInt(totalMatch[1].replace(/,/g, ""), 10)
      : 0;

    // Extract contribution cells: data-date="YYYY-MM-DD" ... data-level="N"
    const contributions: Contribution[] = [];
    const cellRegex =
      /data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"/g;
    let match;
    while ((match = cellRegex.exec(html)) !== null) {
      contributions.push({
        date: match[1],
        level: parseInt(match[2], 10),
      });
    }

    return NextResponse.json(
      { total, contributions },
      { status: 200 }
    );
  } catch (error) {
    console.error("GitHub contributions fetch error:", error);
    return NextResponse.json(
      { total: 0, contributions: [], error: "Failed to fetch" },
      { status: 500 }
    );
  }
}
