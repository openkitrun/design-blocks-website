"use client";

import * as React from "react";

import { SiGithub } from "@icons-pack/react-simple-icons";

import { NavigationLink } from "@/components/navigation/NavigationLink";
import IconMenu from "@/design-system/icons/ArrowLeft";

import { MobileNav } from "@/components/navigation/MobileNav";

function NavigationMenu() {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div>
      <div className="sm:hidden">
        <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <IconMenu size={24} />
        </button>

        {showMobileMenu && <MobileNav />}
      </div>

      <div className="hidden items-center gap-8 sm:flex">
        <NavigationLink href="/docs">Docs</NavigationLink>

        <a
          href="https://github.com/openkitrun/design-blocks"
          target="_blank"
          className="flex flex-row items-center gap-4 rounded-md px-3 py-2 hover:bg-gray-500/40"
        >
          <SiGithub size={18} />
          Star Us on GitHub
        </a>
      </div>
    </div>
  );
}

export default NavigationMenu;
