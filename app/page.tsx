import { PersonJsonLd, WebsiteJsonLd } from "@/components/custom/json-ld";
import HomeClient from "@/components/custom/home-client";

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <WebsiteJsonLd />
      <HomeClient />
    </>
  );
}
