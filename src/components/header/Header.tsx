import * as React from "react";
import Link from "next/link";

import IconDb from "@/design-system/DB";
import IconDesignBlocksBasic from "@/design-system/brand/DesignBlocks";

import NavigationMenu from "@/components/navigation/NavigationMenu";
import { TagDevelopment, TagWip } from "@/components/TagDevelopment";

export function Header() {
  return (
    <header className="py-3">
      <nav className="flex h-full flex-row items-center">
        <Link
          className="flex flex-row items-center gap-2"
          aria-label="Link to home"
          href="/"
        >
          <IconDb size={180} className="hidden sm:block" />
          <IconDesignBlocksBasic size={30} className="sm:hidden" />
          <TagWip />
        </Link>

        <div className="grow" />

        <div className="flex-none">
          <NavigationMenu />
        </div>
      </nav>
    </header>
  );
}
