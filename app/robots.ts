import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
      "/api/",
      "/dashboard/",
      "/settings/",
      "/history/",
      "/mock/",
      "/pte-mock/",
      "/test/",
      "/write/",
      "/speak/",
      "/pte-speak/",
      "/listen/",
      "/pte-listen/",
      "/results/",
      "/admin/",
      "/payment/",
      "/reset-password/",
      "/forgot-password/",
    ],
    },
    sitemap: "https://www.scoravo.com/sitemap.xml",
  };
}
