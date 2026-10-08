export default function robots() {
  const baseUrl = "https://priyadarshan-yogendram.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}