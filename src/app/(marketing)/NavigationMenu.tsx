"use client";

import * as React from "react";

import { SiGithub } from "@icons-pack/react-simple-icons";

import { NavigationLink } from "@/components/navigation/NavigationLink";

function NavigationMenu() {
  return (
    <div className="flex items-center gap-8">
      <NavigationLink href="/">Docs</NavigationLink>

      <NavigationLink href="/" startAdornment={<SiGithub size={18} />}>
        Star Us on GitHub
      </NavigationLink>
    </div>
  );
}

export default NavigationMenu;
