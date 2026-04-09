import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sylvaauris.in",
      lastModified: new Date(),
      priority: 1.0,
    },
  ];
}
