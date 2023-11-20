"use client";

import { FC } from "react";

import { SiAndroid, SiApple } from "@icons-pack/react-simple-icons";

import { CodeWindow } from "./CodeWindow";

//import { snippetToHtml } from "@/utils/syntax-highlighting";

export const codeSnippetsLocal = {
  howItWorksStep3: [
    {
      file: "blocks.config.ts",
      lines: 50,
      content: `
      <pre class="shiki github-dark" style="background-color: transparent" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> {createBlocks, createTokens} </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&#39;@design-blocks/native&#39;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> colors </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&#39;@design-blocks/colors/tailwind-css&#39;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">export</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">const</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">lightTheme</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> {</span></span>
<span class="line"><span style="color: #E1E4E8">  tokens: {</span></span>
<span class="line"><span style="color: #E1E4E8">    colors: {</span></span>
<span class="line"><span style="color: #E1E4E8">      text: {</span></span>
<span class="line"><span style="color: #E1E4E8">        primary: colors.neutral[</span><span style="color: #79B8FF">950</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">        secondary: colors.neutral[</span><span style="color: #79B8FF">600</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">        link: colors.red[</span><span style="color: #79B8FF">500</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">        error: colors.red[</span><span style="color: #79B8FF">600</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">        success: colors.green[</span><span style="color: #79B8FF">600</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">        info: colors.blue[</span><span style="color: #79B8FF">600</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">        warning: colors.yellow[</span><span style="color: #79B8FF">600</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">      },</span></span>
<span class="line"><span style="color: #E1E4E8">      bgColorDisabledPrimary: colors.neutral[</span><span style="color: #79B8FF">300</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">      colorDisabledPrimary: colors.neutral[</span><span style="color: #79B8FF">500</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">      backgroundColorDefault: </span><span style="color: #9ECBFF">&#39;#ffffff&#39;</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">      </span><span style="color: #F97583">...</span><span style="color: #E1E4E8">colors,</span></span>
<span class="line"><span style="color: #E1E4E8">    },</span></span>
<span class="line"><span style="color: #E1E4E8">  },</span></span>
<span class="line"><span style="color: #E1E4E8">} </span><span style="color: #F97583">as</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">const</span><span style="color: #E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">export</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">const</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">darkTheme</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> {</span></span>
<span class="line"><span style="color: #E1E4E8">  tokens: {</span></span>
<span class="line"><span style="color: #E1E4E8">    colors: {</span></span>
<span class="line"><span style="color: #E1E4E8">      text: {</span></span>
<span class="line"><span style="color: #E1E4E8">        primary: colors.neutral[</span><span style="color: #79B8FF">950</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">        secondary: colors.neutral[</span><span style="color: #79B8FF">600</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">        link: colors.red[</span><span style="color: #79B8FF">500</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">        error: colors.red[</span><span style="color: #79B8FF">600</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">        success: colors.green[</span><span style="color: #79B8FF">600</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">        info: colors.blue[</span><span style="color: #79B8FF">600</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">        warning: colors.yellow[</span><span style="color: #79B8FF">600</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">      },</span></span>
<span class="line"><span style="color: #E1E4E8">      bgColorDisabledPrimary: colors.neutral[</span><span style="color: #79B8FF">300</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">      colorDisabledPrimary: colors.neutral[</span><span style="color: #79B8FF">500</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">      backgroundColorDefault: colors.blue[</span><span style="color: #79B8FF">600</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">      </span><span style="color: #F97583">...</span><span style="color: #E1E4E8">colors,</span></span>
<span class="line"><span style="color: #E1E4E8">    },</span></span>
<span class="line"><span style="color: #E1E4E8">  },</span></span>
<span class="line"><span style="color: #E1E4E8">} </span><span style="color: #F97583">as</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">const</span><span style="color: #E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">const</span><span style="color: #E1E4E8"> [</span><span style="color: #79B8FF">lightThemeTokens</span><span style="color: #E1E4E8">] </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">createTokens</span><span style="color: #E1E4E8">({theme: lightTheme});</span></span>
<span class="line"><span style="color: #F97583">const</span><span style="color: #E1E4E8"> [</span><span style="color: #79B8FF">darkThemeTokens</span><span style="color: #E1E4E8">] </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">createTokens</span><span style="color: #E1E4E8">({theme: darkTheme});</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">export</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">const</span><span style="color: #E1E4E8"> {</span><span style="color: #79B8FF">theme</span><span style="color: #E1E4E8">, </span><span style="color: #79B8FF">themes</span><span style="color: #E1E4E8">, </span><span style="color: #79B8FF">block</span><span style="color: #E1E4E8">, </span><span style="color: #79B8FF">css</span><span style="color: #E1E4E8">} </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">createBlocks</span><span style="color: #E1E4E8">({</span></span>
<span class="line"><span style="color: #E1E4E8">  theme: lightThemeTokens,</span></span>
<span class="line"><span style="color: #E1E4E8">  themes: {darkThemeTokens},</span></span>
<span class="line"><span style="color: #E1E4E8">});</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
      `,
    },
    {
      file: "App.tsx",
      lines: 24,
      content: `
      <pre class="shiki github-dark" style="background-color: transparent" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">*</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">as</span><span style="color: #E1E4E8"> React </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&#39;react&#39;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> {useColorScheme} </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&#39;react-native&#39;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> {ThemeProvider} </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&#39;@design-blocks/native&#39;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> {themes} </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&#39;@blocks&#39;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> RootNavigator </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&#39;@/navigation/RootNavigation&#39;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">function</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">App</span><span style="color: #E1E4E8">()</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">JSX</span><span style="color: #E1E4E8">.</span><span style="color: #B392F0">Element</span><span style="color: #E1E4E8"> {</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #F97583">const</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">colorScheme</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">useColorScheme</span><span style="color: #E1E4E8">();</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #F97583">return</span><span style="color: #E1E4E8"> (</span></span>
<span class="line"><span style="color: #E1E4E8">    &lt;</span><span style="color: #79B8FF">SafeAreaProvider</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">      &lt;</span><span style="color: #79B8FF">ThemeProvider</span></span>
<span class="line"><span style="color: #E1E4E8">        </span><span style="color: #B392F0">theme</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{</span></span>
<span class="line"><span style="color: #E1E4E8">          colorScheme </span><span style="color: #F97583">===</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&#39;light&#39;</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">?</span><span style="color: #E1E4E8"> themes.defaultTheme </span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> themes.darkThemeTokens</span></span>
<span class="line"><span style="color: #E1E4E8">        }&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">        &lt;</span><span style="color: #79B8FF">RootNavigator</span><span style="color: #E1E4E8"> /&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">      &lt;/</span><span style="color: #79B8FF">ThemeProvider</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">    &lt;/</span><span style="color: #79B8FF">SafeAreaProvider</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">  );</span></span>
<span class="line"><span style="color: #E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">export</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">default</span><span style="color: #E1E4E8"> App;</span></span>
<span class="line"></span></code></pre>
      `,
    },
    {
      file: "screen.tsx",
      lines: 11,
      content: `
<pre class="shiki github-dark" style="background-color: transparent" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&#39;@design-blocks/native&#39;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> {lightTheme, darkTheme} </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&#39;./blocks.config&#39;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">type</span><span style="color: #E1E4E8"> {TailwindCssColors} </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&#39;@design-blocks/colors&#39;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #F97583">type</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">AppTheme</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">typeof</span><span style="color: #E1E4E8"> lightTheme.tokens </span><span style="color: #F97583">|</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">typeof</span><span style="color: #E1E4E8"> darkTheme.tokens;</span></span>
<span class="line"><span style="color: #F97583">type</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">ColorsAppTheme</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">AppTheme</span><span style="color: #E1E4E8">[</span><span style="color: #9ECBFF">&#39;colors&#39;</span><span style="color: #E1E4E8">];</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">declare</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">module</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&#39;@design-blocks/native&#39;</span><span style="color: #E1E4E8"> {</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #F97583">export</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">interface</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">Colors</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">extends</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">TailwindCssColors</span><span style="color: #E1E4E8">, </span><span style="color: #B392F0">ColorsAppTheme</span><span style="color: #E1E4E8"> {}</span></span>
<span class="line"><span style="color: #E1E4E8">}</span></span>
<span class="line"></span></code></pre>
      `,
    },
  ],
} as const;

// export const HowItWorks: FC<{ codeSnippets?: CodeSnippets }> = () => {
export const HowItWorks: FC = () => {
  return (
    <section className="bg-[url('../../public/bg-section.svg')] border-t border-zinc-800 py-12">
      <div className="max-w-7xl flex flex-col px-4 sm:mx-auto">
        <div className="grid grid-cols-12 gap-20">
          <div className="col-span-6">
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col items-center gap-5 max-w-xs">
                <img src="./img/home/screen_1.png" alt="" />

                <div className="flex flex-row items-center gap-2 bg-zinc-800 py-1 px-4 rounded-full">
                  <SiApple size={16} />
                  <span className="text-xs">IOS</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-5 max-w-xs">
                <img src="./img/home/screen_1.png" alt="" />

                <div className="flex flex-row items-center gap-2 bg-zinc-800 py-1 px-4 rounded-full">
                  <SiAndroid size={16} />
                  <span className="text-xs">Android</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-6">
            <CodeWindow snippets={codeSnippetsLocal.howItWorksStep3} />
          </div>
        </div>
      </div>
    </section>
  );
};
