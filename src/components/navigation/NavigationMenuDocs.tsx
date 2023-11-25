"use client";

import * as React from "react";

import Link from "next/link";

import { SiGithub } from "@icons-pack/react-simple-icons";

import { NavigationLink } from "@/components/navigation/NavigationLink";
import IconDb from "@/design-system/DB";
import { docsConfig } from "@/utils/docs";

function NavigationMenuDocs() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800  bg-[#050505] py-3">
      <div className="flex max-w-7xl flex-col px-4 sm:mx-auto">
        <nav className="flex h-full flex-row items-center">
          <div className="flex flex-row items-center gap-5">
            <div className="flex flex-row items-center gap-2">
              <Link href="/">
                <IconDb size={180} />
              </Link>

              <Link href="/docs">
                <span className="text-2xl font-medium text-blue-500">docs</span>
              </Link>
            </div>

            {docsConfig.mainNav?.map((item, index) => (
              <Link
                key={`item.href-${index}`}
                href={item.href}
                className="flex flex-row items-center gap-2"
              >
                {item.title}
                {item.isBeta && (
                  <span className="rounded-full bg-gray-500/40 px-2 py-[0.5px] text-[8px] text-gray-400">
                    BETA
                  </span>
                )}
                {item.isProgress && (
                  <span className="rounded-full bg-yellow-500/40 px-2 py-[0.5px] text-[8px] text-yellow-400">
                    WIP
                  </span>
                )}
              </Link>
            ))}
          </div>

          <div className="grow" />

          <div className="flex-none">
            <div className="flex items-center gap-8">
              <NavigationLink href="/" startAdornment={<SiGithub size={18} />}>
                Star Us on GitHub
              </NavigationLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavigationMenuDocs;
