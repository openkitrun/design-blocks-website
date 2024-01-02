import { allDocs } from "@/contentlayer/generated";

export default async function sitemap() {
  const docs = allDocs.map((doc) => ({
    url: `https://www.designblocks.dev/docs/${doc.slug}`,
    lastModified: doc.publishedAt,
  }));

  const routes = ["", "/docs", "/docs/why-design-blocks"].map((route) => ({
    url: `https://www.designblocks.dev/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...docs];
}
