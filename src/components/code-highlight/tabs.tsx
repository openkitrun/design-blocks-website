"use client";

import * as Tabs from "@radix-ui/react-tabs";

export function CodeTabsList({ titles }: { titles: string[] }) {
  return (
    <Tabs.List
      aria-label="Select file to view"
      className="flex flex-nowrap overflow-x-auto"
    >
      <div className="sm:flex hidden h-10 items-center gap-2 border-b border-r border-zinc-900 px-4">
        <span className="h-3 w-3 rounded-full bg-zinc-700" />
        <span className="h-3 w-3 rounded-full bg-zinc-700" />
        <span className="h-3 w-3 rounded-full bg-zinc-700" />
      </div>

      {titles.map((title) => (
        <Tabs.Trigger
          key={title}
          value={title}
          className="radix-state-active:border-b-transparent relative flex h-10 shrink-0 items-center border-b border-r border-zinc-900 px-4 text-sm text-zinc-100 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-900 data-[state=active]:bg-blue-950"
        >
          {title}
        </Tabs.Trigger>
      ))}
    </Tabs.List>
  );
}

const CodeTabsRoot = Tabs.Root;
const CodeTabsContent = Tabs.Content;
export { CodeTabsRoot, CodeTabsContent };
