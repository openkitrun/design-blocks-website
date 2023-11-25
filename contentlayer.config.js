import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "vitesse-dark",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          filterMetaString: (string) => string.replace(/filename="[^"]*"/, ""),
          // onVisitHighlightedWord(node) {
          //   node.properties.className = ["word--highlighted"];
          // },
          onVisitHighlightedWord(node, id) {
            node.properties.className = ["word--highlighted"];

            // `id` will be either 'v', 's', or 'i'.
            // State (v)alue, (s)etter, and (i)nitial value
            if (id) {
              const backgroundColor = {
                v: "rgb(196 42 94 / 59%)",
                s: "rgb(0 103 163 / 56%)",
                i: "rgb(100 50 255 / 35%)",
              }[id];

              const color = {
                v: "rgb(255 225 225 / 100%)",
                s: "rgb(175 255 255 / 100%)",
                i: "rgb(225 200 255 / 100%)",
              }[id];

              // If the word spans across syntax boundaries (e.g. punctuation), remove
              // colors from the child nodes.
              if (node.properties["data-rehype-pretty-code-wrapper"]) {
                node.children.forEach((childNode) => {
                  childNode.properties.style = "";
                });
              }

              node.properties.style = `background-color: ${backgroundColor}; color: ${color};`;
            }
          },
          tokensMap: {
            fn: "entity.name.function",
          },
        },
      ],
      rehypeCodeTitles,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});

export default contentLayerConfig;
