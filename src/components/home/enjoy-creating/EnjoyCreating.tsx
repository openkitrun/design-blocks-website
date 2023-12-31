import { FC } from "react";
import Image from "next/image";

import { SiAndroid, SiApple } from "@icons-pack/react-simple-icons";

import { Code } from "@/components/code-highlight/code";
import { tabs } from "@/components/code-highlight/tabs.extension";

import { appSnippet } from "@/utils/code-snippets/app.snippet";
import { screenSnippet } from "@/utils/code-snippets/screen.snippet";
import { blocksConfigSnippet } from "@/utils/code-snippets/blocksConfig.snippet";

const codeSnippets = [
  {
    code: blocksConfigSnippet,
    title: "blocks.config.ts",
    lang: "ts",
  },
  {
    code: screenSnippet,
    title: "Screen.tsx",
    lang: "tsx",
  },
  {
    code: appSnippet,
    title: "App.tsx",
    lang: "tsx",
  },
];

// export const HowItWorks: FC<{ codeSnippets?: CodeSnippets }> = () => {
export const EnjoyCreating: FC = () => {
  return (
    <section className="border-t border-zinc-800 bg-[url('../../public/bg-section.svg')] py-12">
      <div className="mb-16 flex flex-col items-center justify-center gap-4 px-4 sm:mx-auto">
        <h2 className="text-4xl font-semibold">Enjoy Creating</h2>

        <p className="text-gray-400">
          "Design Blocks" enables rapid creation of user interfaces, leading to
          an excellent development experience.
        </p>
      </div>

      <div className="flex max-w-7xl flex-col px-4 sm:mx-auto">
        <div className="grid grid-cols-2 gap-20">
          <div className="sm:col-span-1 md:col-span-2 lg:col-span-1 col-span-2">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div className="flex flex-col items-center gap-5">
                <Image
                  src="/img/home/screen_01.png"
                  className="lg:w-[300px] lg:h-[570px] w-[300px] h-[600px]"
                  width={272}
                  height={550}
                  alt="Wallet app ios"
                />

                <div className="flex flex-row items-center gap-2 rounded-full bg-zinc-800 px-4 py-1">
                  <SiApple size={16} />
                  <span className="text-xs">IOS</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-5">
                <Image
                  src="/img/home/screen_02.png"
                  width={272}
                  height={550}
                  className="lg:w-[300px] lg:h-[570px] w-[300px] h-[600px]"
                  alt="Wallet app android"
                />

                <div className="flex flex-row items-center gap-2 rounded-full bg-emerald-950 px-4 py-1">
                  <SiAndroid size={16} color="#34d399" />
                  <span className="text-xs text-emerald-400">Android</span>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 md:col-span-2 lg:col-span-1 col-span-2">
            <Code
              lineNumbers
              lang="tsx"
              extensions={[tabs]}
              subProps={codeSnippets}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
