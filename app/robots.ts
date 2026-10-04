import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.madanghimire.info.np/sitemap.xml",
    host: "https://www.madanghimire.info.np",
  };
}
