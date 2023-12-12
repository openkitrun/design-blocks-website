"use client";

import * as React from "react";

import Link from "next/link";

import { SiGithub } from "@icons-pack/react-simple-icons";
import IconMenu from "@/design-system/icons/Menu";

import { NavigationLink } from "@/components/navigation/NavigationLink";
import IconDb from "@/design-system/DB";
import { docsConfig } from "@/utils/docs";
import { DocsSidebarNav } from "@/components/docs/sidebar-nav";

import { MobileNavigationDocs } from "@/components/navigation/MobileNavigationDocs";

function NavigationMenuDocs() {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-[#050505] py-3">
      <div className="hidden sm:flex max-w-7xl flex-col px-4 sm:mx-auto">
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
                  <span className="rounded-sm bg-blue-500/10 px-2 py-0 border border-blue-400 text-[8.5px] text-blue-300">
                    Beta
                  </span>
                )}

                {item.isExperimental && (
                  <span className="rounded-sm bg-red-500/10 px-2 py-0 border border-red-400 text-[8.5px] text-red-300">
                    Experimental
                  </span>
                )}

                {item.isWIP && (
                  <span className="rounded-sm bg-yellow-500/10 px-2 py-0 border border-yellow-400 text-[8.5px] text-yellow-300">
                    Wip
                  </span>
                )}

                {item.isPlanned && (
                  <span className="rounded-sm bg-gray-500/10 px-2 py-0 border border-gray-400 text-[8.5px] text-gray-300">
                    Planned
                  </span>
                )}
              </Link>
            ))}
          </div>

          <div className="grow" />

          <div className="flex-none">
            <div className="flex items-center gap-8">
              <NavigationLink
                href="https://github.com/openkitrun/design-blocks"
                startAdornment={<SiGithub size={18} />}
              >
                Star Us on GitHub
              </NavigationLink>
            </div>
          </div>
        </nav>
      </div>

      <div className="sm:hidden flex max-w-7xl flex-col px-4 sm:mx-auto">
        <div className="flex h-full flex-row items-center">
          <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <IconMenu size={24} />
          </button>

          <div className="grow" />

          <NavigationLink
            href="https://github.com/openkitrun/design-blocks"
            startAdornment={<SiGithub size={18} />}
          />
        </div>

        {showMobileMenu && (
          <MobileNavigationDocs
            items={docsConfig.mainNav}
            oncloseMenu={() => setShowMobileMenu(false)}
          >
            <DocsSidebarNav
              items={docsConfig.sidebarNav}
              oncloseMenu={() => setShowMobileMenu(false)}
            />
          </MobileNavigationDocs>
        )}
      </div>
    </header>
  );
}

export default NavigationMenuDocs;
