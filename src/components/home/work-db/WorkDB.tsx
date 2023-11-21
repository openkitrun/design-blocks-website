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
      file: "Screen.tsx",
      lines: 263,
      content: `
<pre class="shiki github-dark" style="background-color: transparent" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> { ScrollView, Image } </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&quot;react-native&quot;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> { Text, Box, YStack, XStack } </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&quot;@design-blocks/primitives&quot;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> { colors } </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&quot;@design-blocks/colors/tailwind-css&quot;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> IconAdd </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&quot;../../components/icons/Add&quot;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> IconApps </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&quot;../../components/icons/Apps&quot;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> IconRefresh </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&quot;../../components/icons/Refresh&quot;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> IconDownload </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&quot;../../components/icons/Download&quot;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> IconArrowRightUp </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&quot;../../components/icons/ArrowRightUp&quot;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> IconArrowDropDown </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&quot;../../components/icons/ArrowDropDown&quot;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> { block } </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&quot;../../../blocks.config&quot;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">const</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">actions</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> {</span></span>
<span class="line"><span style="color: #E1E4E8">  add: IconAdd,</span></span>
<span class="line"><span style="color: #E1E4E8">  apps: IconApps,</span></span>
<span class="line"><span style="color: #E1E4E8">  refresh: IconRefresh,</span></span>
<span class="line"><span style="color: #E1E4E8">  download: IconDownload,</span></span>
<span class="line"><span style="color: #E1E4E8">  arrowRightUp: IconArrowRightUp,</span></span>
<span class="line"><span style="color: #E1E4E8">};</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">const</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">ScrollViewBlock</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">block</span><span style="color: #E1E4E8">(ScrollView)(({ </span><span style="color: #FFAB70">theme</span><span style="color: #E1E4E8"> }) </span><span style="color: #F97583">=&gt;</span><span style="color: #E1E4E8"> ({</span></span>
<span class="line"><span style="color: #E1E4E8">  marginTop: </span><span style="color: #79B8FF">35</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">  backgroundColor: theme.colors.zinc[</span><span style="color: #79B8FF">950</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">  height: </span><span style="color: #9ECBFF">&quot;100%&quot;</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">}));</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">const</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">AvatarBlock</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">block</span><span style="color: #E1E4E8">(Image)(({ </span><span style="color: #FFAB70">theme</span><span style="color: #E1E4E8"> }) </span><span style="color: #F97583">=&gt;</span><span style="color: #E1E4E8"> ({</span></span>
<span class="line"><span style="color: #E1E4E8">  width: theme.utils.</span><span style="color: #B392F0">spacing</span><span style="color: #E1E4E8">(</span><span style="color: #79B8FF">6</span><span style="color: #E1E4E8">),</span></span>
<span class="line"><span style="color: #E1E4E8">  height: theme.utils.</span><span style="color: #B392F0">spacing</span><span style="color: #E1E4E8">(</span><span style="color: #79B8FF">6</span><span style="color: #E1E4E8">),</span></span>
<span class="line"><span style="color: #E1E4E8">  borderRadius: theme.spacings[</span><span style="color: #9ECBFF">&quot;8xl&quot;</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">}));</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">const</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">AvatarRecipientBlock</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">block</span><span style="color: #E1E4E8">(Image)(({ </span><span style="color: #FFAB70">theme</span><span style="color: #E1E4E8"> }) </span><span style="color: #F97583">=&gt;</span><span style="color: #E1E4E8"> ({</span></span>
<span class="line"><span style="color: #E1E4E8">  width: theme.utils.</span><span style="color: #B392F0">spacing</span><span style="color: #E1E4E8">(</span><span style="color: #79B8FF">9</span><span style="color: #E1E4E8">),</span></span>
<span class="line"><span style="color: #E1E4E8">  height: theme.utils.</span><span style="color: #B392F0">spacing</span><span style="color: #E1E4E8">(</span><span style="color: #79B8FF">9</span><span style="color: #E1E4E8">),</span></span>
<span class="line"><span style="color: #E1E4E8">  borderRadius: </span><span style="color: #79B8FF">9999</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">}));</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">const</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">TransactionItem</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> ({</span></span>
<span class="line"><span style="color: #E1E4E8">  name,</span></span>
<span class="line"><span style="color: #E1E4E8">  date,</span></span>
<span class="line"><span style="color: #E1E4E8">  amount,</span></span>
<span class="line"><span style="color: #E1E4E8">}</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> {</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #FFAB70">name</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">string</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #FFAB70">date</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">string</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #FFAB70">amount</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">string</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #E1E4E8">}) </span><span style="color: #F97583">=&gt;</span><span style="color: #E1E4E8"> (</span></span>
<span class="line"><span style="color: #E1E4E8">  &lt;</span><span style="color: #79B8FF">XStack</span></span>
<span class="line"><span style="color: #E1E4E8">    </span><span style="color: #B392F0">bgColor</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;zinc.50&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">    </span><span style="color: #B392F0">ph</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;sm&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">    </span><span style="color: #B392F0">pv</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;xs&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">    </span><span style="color: #B392F0">borderRadius</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{</span><span style="color: #79B8FF">9999</span><span style="color: #E1E4E8">}</span></span>
<span class="line"><span style="color: #E1E4E8">    </span><span style="color: #B392F0">justifyContent</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;space-between&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">    </span><span style="color: #B392F0">alignItems</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;center&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">    </span><span style="color: #B392F0">gap</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;md&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">  &gt;</span></span>
<span class="line"><span style="color: #E1E4E8">    &lt;</span><span style="color: #79B8FF">XStack</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">alignItems</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;center&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">gap</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;md&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">      &lt;</span><span style="color: #79B8FF">Box</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">bgColor</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;zinc.950&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">p</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;xs&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">borderRadius</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{</span><span style="color: #79B8FF">9999</span><span style="color: #E1E4E8">}&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">        &lt;</span><span style="color: #79B8FF">IconArrowRightUp</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">color</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{colors.zinc[</span><span style="color: #79B8FF">50</span><span style="color: #E1E4E8">]} /&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">      &lt;/</span><span style="color: #79B8FF">Box</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">      &lt;</span><span style="color: #79B8FF">YStack</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">gap</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;xxs&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">        &lt;</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">fontWeight</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;medium&quot;</span><span style="color: #E1E4E8">&gt;{name}&lt;/</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">        &lt;</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">color</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;zinc.500&quot;</span><span style="color: #E1E4E8">&gt;{date}&lt;/</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">      &lt;/</span><span style="color: #79B8FF">YStack</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">    &lt;/</span><span style="color: #79B8FF">XStack</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">    &lt;</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">fontWeight</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;medium&quot;</span><span style="color: #E1E4E8">&gt;{amount}&lt;/</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">  &lt;/</span><span style="color: #79B8FF">XStack</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">const</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">Recipient</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> ({</span></span>
<span class="line"><span style="color: #E1E4E8">  avatarUrl,</span></span>
<span class="line"><span style="color: #E1E4E8">  name,</span></span>
<span class="line"><span style="color: #E1E4E8">}</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> {</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #FFAB70">avatarUrl</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">string</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #FFAB70">name</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">string</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #E1E4E8">}) </span><span style="color: #F97583">=&gt;</span><span style="color: #E1E4E8"> (</span></span>
<span class="line"><span style="color: #E1E4E8">  &lt;</span><span style="color: #79B8FF">YStack</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">alignItems</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;center&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">gap</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;xs&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">    &lt;</span><span style="color: #79B8FF">AvatarRecipientBlock</span></span>
<span class="line"><span style="color: #E1E4E8">      </span><span style="color: #B392F0">source</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{{</span></span>
<span class="line"><span style="color: #E1E4E8">        uri: avatarUrl,</span></span>
<span class="line"><span style="color: #E1E4E8">      }}</span></span>
<span class="line"><span style="color: #E1E4E8">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">    &lt;</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">color</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;zinc.50&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">fontWeight</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;light&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">      {name}</span></span>
<span class="line"><span style="color: #E1E4E8">    &lt;/</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">  &lt;/</span><span style="color: #79B8FF">YStack</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">const</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">Action</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> ({ </span><span style="color: #FFAB70">name</span><span style="color: #E1E4E8"> }</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> { </span><span style="color: #FFAB70">name</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">keyof</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">typeof</span><span style="color: #E1E4E8"> actions }) </span><span style="color: #F97583">=&gt;</span><span style="color: #E1E4E8"> {</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #F97583">const</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">Icon</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> actions[name];</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #F97583">return</span><span style="color: #E1E4E8"> (</span></span>
<span class="line"><span style="color: #E1E4E8">    &lt;</span><span style="color: #79B8FF">Box</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">bgColor</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;zinc.50&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">p</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;md&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">borderRadius</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{</span><span style="color: #79B8FF">9999</span><span style="color: #E1E4E8">}&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">      &lt;</span><span style="color: #79B8FF">Icon</span><span style="color: #E1E4E8"> /&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">    &lt;/</span><span style="color: #79B8FF">Box</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">  );</span></span>
<span class="line"><span style="color: #E1E4E8">};</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">function</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">DSScreen</span><span style="color: #E1E4E8">() {</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #F97583">return</span><span style="color: #E1E4E8"> (</span></span>
<span class="line"><span style="color: #E1E4E8">    &lt;</span><span style="color: #79B8FF">ScrollViewBlock</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">contentInsetAdjustmentBehavior</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;automatic&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">      &lt;</span><span style="color: #79B8FF">YStack</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">ph</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;md&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">gap</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;lg&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">        &lt;</span><span style="color: #79B8FF">XStack</span></span>
<span class="line"><span style="color: #E1E4E8">          </span><span style="color: #B392F0">bgColor</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;zinc.50&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">          </span><span style="color: #B392F0">ph</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;sm&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">          </span><span style="color: #B392F0">pv</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;xs&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">          </span><span style="color: #B392F0">borderRadius</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{</span><span style="color: #79B8FF">9999</span><span style="color: #E1E4E8">}</span></span>
<span class="line"><span style="color: #E1E4E8">          </span><span style="color: #B392F0">justifyContent</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;space-between&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">          </span><span style="color: #B392F0">alignItems</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;center&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">          </span><span style="color: #B392F0">gap</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;md&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">        &gt;</span></span>
<span class="line"><span style="color: #E1E4E8">          &lt;</span><span style="color: #79B8FF">XStack</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">alignItems</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;center&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">gap</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;md&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">            &lt;</span><span style="color: #79B8FF">AvatarBlock</span></span>
<span class="line"><span style="color: #E1E4E8">              </span><span style="color: #B392F0">source</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{{</span></span>
<span class="line"><span style="color: #E1E4E8">                uri: </span><span style="color: #9ECBFF">&quot;https://wootsbot.dev/avatar.jpg&quot;</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">              }}</span></span>
<span class="line"><span style="color: #E1E4E8">            /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">            &lt;</span><span style="color: #79B8FF">YStack</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">gap</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;xxs&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">              &lt;</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">fontWeight</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;medium&quot;</span><span style="color: #E1E4E8">&gt;Welcome, Jorge&lt;/</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">              &lt;</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">color</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;zinc.500&quot;</span><span style="color: #E1E4E8">&gt;Your wallet&lt;/</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">            &lt;/</span><span style="color: #79B8FF">YStack</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">          &lt;/</span><span style="color: #79B8FF">XStack</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">          &lt;</span><span style="color: #79B8FF">Box</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">bgColor</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;zinc.950&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">p</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;xs&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">borderRadius</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{</span><span style="color: #79B8FF">9999</span><span style="color: #E1E4E8">}&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">            &lt;</span><span style="color: #79B8FF">IconRefresh</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">color</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{colors.zinc[</span><span style="color: #79B8FF">50</span><span style="color: #E1E4E8">]} /&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">          &lt;/</span><span style="color: #79B8FF">Box</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">        &lt;/</span><span style="color: #79B8FF">XStack</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">        &lt;</span><span style="color: #79B8FF">Box</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">bgColor</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;sky.200&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">p</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;sm&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">borderRadius</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{</span><span style="color: #79B8FF">16</span><span style="color: #E1E4E8">}&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">          &lt;</span><span style="color: #79B8FF">YStack</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">gap</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;lg&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">            &lt;</span><span style="color: #79B8FF">XStack</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">gap</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;xs&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">              &lt;</span><span style="color: #79B8FF">Box</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">bgColor</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;sky.100&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">borderRadius</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{</span><span style="color: #79B8FF">9999</span><span style="color: #E1E4E8">} </span><span style="color: #B392F0">p</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;xs&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">                &lt;</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">fontSize</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;sm&quot;</span><span style="color: #E1E4E8">&gt;USD&lt;/</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">              &lt;/</span><span style="color: #79B8FF">Box</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">              &lt;</span><span style="color: #79B8FF">Box</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">bgColor</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;sky.100&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">borderRadius</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{</span><span style="color: #79B8FF">9999</span><span style="color: #E1E4E8">} </span><span style="color: #B392F0">p</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;xs&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">                &lt;</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">fontSize</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;sm&quot;</span><span style="color: #E1E4E8">&gt;VISA&lt;/</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">              &lt;/</span><span style="color: #79B8FF">Box</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">              &lt;</span><span style="color: #79B8FF">Box</span></span>
<span class="line"><span style="color: #E1E4E8">                </span><span style="color: #B392F0">borderColor</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;gray.500&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">                </span><span style="color: #B392F0">borderWidth</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{</span><span style="color: #79B8FF">0.5</span><span style="color: #E1E4E8">}</span></span>
<span class="line"><span style="color: #E1E4E8">                </span><span style="color: #B392F0">borderRadius</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{</span><span style="color: #79B8FF">9999</span><span style="color: #E1E4E8">}</span></span>
<span class="line"><span style="color: #E1E4E8">                </span><span style="color: #B392F0">p</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;xs&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">              &gt;</span></span>
<span class="line"><span style="color: #E1E4E8">                &lt;</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">fontSize</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;sm&quot;</span><span style="color: #E1E4E8">&gt;****1216, Exp: 05/2030&lt;/</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">              &lt;/</span><span style="color: #79B8FF">Box</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">            &lt;/</span><span style="color: #79B8FF">XStack</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">            &lt;</span><span style="color: #79B8FF">YStack</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">              &lt;</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">fontSize</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;4xl&quot;</span><span style="color: #E1E4E8">&gt;$3,400.00&lt;/</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">              &lt;</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">color</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;zinc.500&quot;</span><span style="color: #E1E4E8">&gt;Balance&lt;/</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">            &lt;/</span><span style="color: #79B8FF">YStack</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">            &lt;</span><span style="color: #79B8FF">XStack</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">gap</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;md&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">              &lt;</span><span style="color: #79B8FF">Action</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">name</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;add&quot;</span><span style="color: #E1E4E8"> /&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">              &lt;</span><span style="color: #79B8FF">Action</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">name</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;download&quot;</span><span style="color: #E1E4E8"> /&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">              &lt;</span><span style="color: #79B8FF">Action</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">name</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;arrowRightUp&quot;</span><span style="color: #E1E4E8"> /&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">              &lt;</span><span style="color: #79B8FF">Action</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">name</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;apps&quot;</span><span style="color: #E1E4E8"> /&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">            &lt;/</span><span style="color: #79B8FF">XStack</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">          &lt;/</span><span style="color: #79B8FF">YStack</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">        &lt;/</span><span style="color: #79B8FF">Box</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">        &lt;</span><span style="color: #79B8FF">YStack</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">gap</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;md&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">          &lt;</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">fontSize</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;xl&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">color</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;zinc.50&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">            Recent recipients</span></span>
<span class="line"><span style="color: #E1E4E8">          &lt;/</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">          &lt;</span><span style="color: #79B8FF">XStack</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">gap</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;md&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">            &lt;</span><span style="color: #79B8FF">YStack</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">alignItems</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;center&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">gap</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;xs&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">              &lt;</span><span style="color: #79B8FF">Box</span></span>
<span class="line"><span style="color: #E1E4E8">                </span><span style="color: #B392F0">sx</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{{</span></span>
<span class="line"><span style="color: #E1E4E8">                  display: </span><span style="color: #9ECBFF">&quot;flex&quot;</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">                  justifyContent: </span><span style="color: #9ECBFF">&quot;center&quot;</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">                  alignItems: </span><span style="color: #9ECBFF">&quot;center&quot;</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">                  borderRadius: </span><span style="color: #79B8FF">9999</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">                  bgColor: </span><span style="color: #9ECBFF">&quot;zinc.50&quot;</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">                  width: </span><span style="color: #79B8FF">72</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">                  height: </span><span style="color: #79B8FF">72</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">                }}</span></span>
<span class="line"><span style="color: #E1E4E8">              &gt;</span></span>
<span class="line"><span style="color: #E1E4E8">                &lt;</span><span style="color: #79B8FF">IconAdd</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">size</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{</span><span style="color: #79B8FF">32</span><span style="color: #E1E4E8">} /&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">              &lt;/</span><span style="color: #79B8FF">Box</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">              &lt;</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">color</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;zinc.50&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">fontWeight</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;light&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">                Add</span></span>
<span class="line"><span style="color: #E1E4E8">              &lt;/</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">            &lt;/</span><span style="color: #79B8FF">YStack</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">            &lt;</span><span style="color: #79B8FF">Recipient</span></span>
<span class="line"><span style="color: #E1E4E8">              </span><span style="color: #B392F0">name</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;Margaret&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">              </span><span style="color: #B392F0">avatarUrl</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Margaret_Hamilton_-_restoration.jpg/1920px-Margaret_Hamilton_-_restoration.jpg&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">            /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">            &lt;</span><span style="color: #79B8FF">Recipient</span></span>
<span class="line"><span style="color: #E1E4E8">              </span><span style="color: #B392F0">name</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;Eich&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">              </span><span style="color: #B392F0">avatarUrl</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/440px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">            /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">            &lt;</span><span style="color: #79B8FF">Recipient</span></span>
<span class="line"><span style="color: #E1E4E8">              </span><span style="color: #B392F0">name</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;Rossum&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">              </span><span style="color: #B392F0">avatarUrl</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Guido_van_Rossum_OSCON_2006.jpg/400px-Guido_van_Rossum_OSCON_2006.jpg&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">            /&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">          &lt;/</span><span style="color: #79B8FF">XStack</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">        &lt;/</span><span style="color: #79B8FF">YStack</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">        &lt;</span><span style="color: #79B8FF">YStack</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">gap</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;md&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">          &lt;</span><span style="color: #79B8FF">XStack</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">justifyContent</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;space-between&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">            &lt;</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">fontSize</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;xl&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">color</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;zinc.50&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">              Transactions</span></span>
<span class="line"><span style="color: #E1E4E8">            &lt;/</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">            &lt;</span><span style="color: #79B8FF">XStack</span></span>
<span class="line"><span style="color: #E1E4E8">              </span><span style="color: #B392F0">borderColor</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;gray.500&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">              </span><span style="color: #B392F0">borderWidth</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{</span><span style="color: #79B8FF">0.5</span><span style="color: #E1E4E8">}</span></span>
<span class="line"><span style="color: #E1E4E8">              </span><span style="color: #B392F0">borderRadius</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{</span><span style="color: #79B8FF">9999</span><span style="color: #E1E4E8">}</span></span>
<span class="line"><span style="color: #E1E4E8">              </span><span style="color: #B392F0">pv</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;xxs&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">              </span><span style="color: #B392F0">ph</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;sm&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">              </span><span style="color: #B392F0">alignItems</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;center&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">            &gt;</span></span>
<span class="line"><span style="color: #E1E4E8">              &lt;</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">color</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;zinc.50&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">fontSize</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;sm&quot;</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">                Last</span></span>
<span class="line"><span style="color: #E1E4E8">              &lt;/</span><span style="color: #79B8FF">Text</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">              &lt;</span><span style="color: #79B8FF">IconArrowDropDown</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">color</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{colors.zinc[</span><span style="color: #79B8FF">50</span><span style="color: #E1E4E8">]} /&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">            &lt;/</span><span style="color: #79B8FF">XStack</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">          &lt;/</span><span style="color: #79B8FF">XStack</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">          &lt;</span><span style="color: #79B8FF">TransactionItem</span></span>
<span class="line"><span style="color: #E1E4E8">            </span><span style="color: #B392F0">name</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;Online store&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">            </span><span style="color: #B392F0">date</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;Mar 04 2023, 12:30&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">            </span><span style="color: #B392F0">amount</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;-$2,400.00&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">          /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">          &lt;</span><span style="color: #79B8FF">TransactionItem</span></span>
<span class="line"><span style="color: #E1E4E8">            </span><span style="color: #B392F0">name</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;Apple store&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">            </span><span style="color: #B392F0">date</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;May 05 2023, 04:30&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">            </span><span style="color: #B392F0">amount</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;-$1,200.00&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">          /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">          &lt;</span><span style="color: #79B8FF">TransactionItem</span></span>
<span class="line"><span style="color: #E1E4E8">            </span><span style="color: #B392F0">name</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;Food moust&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">            </span><span style="color: #B392F0">date</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;Jun 16 2023, 07:00&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">            </span><span style="color: #B392F0">amount</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;-$200.00&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">          /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">          &lt;</span><span style="color: #79B8FF">TransactionItem</span></span>
<span class="line"><span style="color: #E1E4E8">            </span><span style="color: #B392F0">name</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;Fast&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">            </span><span style="color: #B392F0">date</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;Aug 03 2023, 07:00&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">            </span><span style="color: #B392F0">amount</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">&quot;-$5.00&quot;</span></span>
<span class="line"><span style="color: #E1E4E8">          /&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">        &lt;/</span><span style="color: #79B8FF">YStack</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">      &lt;/</span><span style="color: #79B8FF">YStack</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">    &lt;/</span><span style="color: #79B8FF">ScrollViewBlock</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">  );</span></span>
<span class="line"><span style="color: #E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">export</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">default</span><span style="color: #E1E4E8"> DSScreen;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
      `,
    },
    {
      file: "App.tsx",
      lines: 24,
      content: `
<pre class="shiki github-dark" style="background-color: transparent" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">*</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">as</span><span style="color: #E1E4E8"> React </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&quot;react&quot;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> { useColorScheme } </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&quot;react-native&quot;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> { ThemeProvider } </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&quot;@design-blocks/native&quot;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> { themes } </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&quot;./blocks.config.ts&quot;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> Screen </span><span style="color: #F97583">from</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&quot;./screen&quot;</span><span style="color: #E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">function</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">App</span><span style="color: #E1E4E8">()</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">JSX</span><span style="color: #E1E4E8">.</span><span style="color: #B392F0">Element</span><span style="color: #E1E4E8"> {</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #F97583">const</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">colorScheme</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">useColorScheme</span><span style="color: #E1E4E8">();</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #F97583">return</span><span style="color: #E1E4E8"> (</span></span>
<span class="line"><span style="color: #E1E4E8">    &lt;</span><span style="color: #79B8FF">SafeAreaProvider</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">      &lt;</span><span style="color: #79B8FF">ThemeProvider</span></span>
<span class="line"><span style="color: #E1E4E8">        </span><span style="color: #B392F0">theme</span><span style="color: #F97583">=</span><span style="color: #E1E4E8">{</span></span>
<span class="line"><span style="color: #E1E4E8">          colorScheme </span><span style="color: #F97583">===</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">&quot;light&quot;</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">?</span><span style="color: #E1E4E8"> themes.defaultTheme </span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> themes.darkThemeTokens</span></span>
<span class="line"><span style="color: #E1E4E8">        }</span></span>
<span class="line"><span style="color: #E1E4E8">      &gt;</span></span>
<span class="line"><span style="color: #E1E4E8">        &lt;</span><span style="color: #79B8FF">Screen</span><span style="color: #E1E4E8"> /&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">      &lt;/</span><span style="color: #79B8FF">ThemeProvider</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">    &lt;/</span><span style="color: #79B8FF">SafeAreaProvider</span><span style="color: #E1E4E8">&gt;</span></span>
<span class="line"><span style="color: #E1E4E8">  );</span></span>
<span class="line"><span style="color: #E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">export</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">default</span><span style="color: #E1E4E8"> App;</span></span>
<span class="line"></span></code></pre>
      `,
    },
  ],
} as const;

// export const HowItWorks: FC<{ codeSnippets?: CodeSnippets }> = () => {
export const HowItWorks: FC = () => {
  return (
    <section className="border-t border-zinc-800 bg-[url('../../public/bg-section.svg')] py-12">
      <div className="flex max-w-7xl flex-col px-4 sm:mx-auto">
        <div className="grid grid-cols-12 gap-20">
          <div className="col-span-6">
            <div className="grid grid-cols-2 gap-10">
              <div className="flex max-w-xs flex-col items-center gap-5">
                <img
                  src="./img/home/screen_01.png"
                  className="h-[550px]"
                  alt=""
                />

                <div className="flex flex-row items-center gap-2 rounded-full bg-zinc-800 px-4 py-1">
                  <SiApple size={16} />
                  <span className="text-xs">IOS</span>
                </div>
              </div>

              <div className="flex max-w-xs flex-col items-center gap-5">
                <img
                  src="./img/home/screen_02.png"
                  className="h-[550px]"
                  alt=""
                />

                <div className="flex flex-row items-center gap-2 rounded-full bg-emerald-950 px-4 py-1">
                  <SiAndroid size={16} color="#34d399" />
                  <span className="text-xs text-emerald-400">Android</span>
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
