import {
  renderCodeToHTML,
  runTwoSlash,
  createShikiHighlighter,
  type UserConfigSettings,
} from "shiki-twoslash";
//import { getHighlighter } from "shiki";
import shiki from "shiki";
type Highlighter = Awaited<ReturnType<typeof createShikiHighlighter>>;

const highlighterMap = new Map<ColorScheme, Highlighter>();

export type ColorScheme = "light" | "dark";

// export const snippetToHtml = async () => {
//   await shiki
//     .getHighlighter({
//       theme: "nord",
//     })
//     .then((highlighter) => {
//       console.log(
//         highlighter.codeToHtml(`console.log('shiki');`, { lang: "js" })
//       );
//     });
// };

// export const snippetToHtml = async (
//   snippet: string,
//   colorScheme: ColorScheme
// ) => {
//   const themeName = `github-${colorScheme}`;

//   if (!highlighterMap.has(colorScheme)) {
//     //@ts-ignore
//     highlighterMap.set(colorScheme, await getHighlighter({ theme: "nord" }));
//   }

//   const settings: UserConfigSettings = {
//     includeJSDocInHover: true,
//     defaultCompilerOptions: {
//       strict: false,
//       noImplicitAny: false,
//     },
//   };

//   const twoslash = runTwoSlash(snippet, "tsx", settings);

//   const html = renderCodeToHTML(
//     twoslash.code,
//     "tsx",
//     { twoslash: true },
//     { ...settings, themeName },
//     highlighterMap.get(colorScheme)!,
//     twoslash
//   );

//   return html.replace(
//     "./assets/contentlayer-generated",
//     "contentlayer/generated"
//   );
// };
