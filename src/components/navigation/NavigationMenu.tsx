"use client";

import * as React from "react";

import { SiGithub } from "@icons-pack/react-simple-icons";

import { NavigationLink } from "@/components/navigation/NavigationLink";

function NavigationMenu() {
  return (
    <div className="flex items-center gap-8">
      <NavigationLink href="/docs">Docs</NavigationLink>

      <a
        href="https://github.com/openkitrun/design-blocks"
        target="_blank"
        className="flex flex-row items-center gap-4 px-3 py-2 rounded-md hover:bg-gray-500/40"
      >
        <SiGithub size={18} />
        Star Us on GitHub
      </a>
    </div>
  );
}

export default NavigationMenu;
