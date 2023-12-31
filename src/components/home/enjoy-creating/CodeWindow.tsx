"use client";

import { FC } from "react";

import * as Tabs from "@radix-ui/react-tabs";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import { Card } from "../../Card";

export type CodeSnippet = { file: string; content: string; lines: number };

export const CodeWindow: FC<{
  snippets: readonly CodeSnippet[];
}> = ({ snippets }) => {
  return (
    <Card shadow className="mb-0">
      <Tabs.Root defaultValue={snippets[0].file}>
        <Tabs.List
          aria-label="Select file to view"
          className="flex flex-nowrap overflow-x-auto"
        >
          <div className="flex h-10 items-center gap-2 border-b border-r border-zinc-900 px-4">
            <span className="h-3 w-3 rounded-full bg-zinc-700" />
            <span className="h-3 w-3 rounded-full bg-zinc-700" />
            <span className="h-3 w-3 rounded-full bg-zinc-700" />
          </div>

          {snippets.map(({ file }, index) => (
            <Tabs.Trigger
              key={index}
              value={file}
              className="radix-state-active:border-b-transparent relative flex h-10 shrink-0 items-center border-b border-r border-zinc-900  px-4 text-sm text-zinc-100 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-900 data-[state=active]:bg-blue-950"
            >
              {file}
            </Tabs.Trigger>
          ))}

          <div className="grow border-b border-zinc-900"></div>
        </Tabs.List>

        <div className="max-h-[512px] overflow-y-scroll">
          {snippets.map(({ file, content, lines }, index) => (
            <Tabs.Content
              key={index}
              value={file}
              className="flex overflow-y-hidden focus:outline-none"
            >
              <div className="w-8 shrink-0 grow-0 bg-zinc-950 pb-3 pt-[19px] text-right font-mono text-sm leading-none text-zinc-400">
                {[...new Array(lines)].map((v, index) => (
                  <div key={index} className="h-[20px] px-2">
                    {index + 1}
                  </div>
                ))}
              </div>

              <ScrollArea.Root className="w-full overflow-hidden bg-zinc-950">
                <ScrollArea.Viewport className="h-full w-full">
                  <div
                    className="not-prose -mb-[40px] -mt-[18px] text-[13px]"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </ScrollArea.Viewport>

                <ScrollArea.Scrollbar orientation="horizontal">
                  <ScrollArea.Thumb className="relative" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner />
              </ScrollArea.Root>
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </Card>
  );
};
