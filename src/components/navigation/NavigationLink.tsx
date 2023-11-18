"use client";

import * as React from "react";

import Link from "next/link";
import type { LinkProps } from "next/link";

type NavigationLinkProps = {
  startAdornment?: React.ReactNode | null;
  endAdornment?: React.ReactNode | null;
  children?: React.ReactNode | string;
} & LinkProps;

export function NavigationLink({
  children,
  startAdornment,
  endAdornment,
  href,
}: NavigationLinkProps) {
  return (
    <Link href={href} className="px-3 py-2 rounded-md hover:bg-gray-500/40">
      {startAdornment && (
        <div className="flex flex-row items-center gap-4">
          {startAdornment}
          {children}
        </div>
      )}

      {!(endAdornment || startAdornment) && children}

      {endAdornment && (
        <div className="flex flex-row items-center gap-4">{children}</div>
      )}
    </Link>
  );
}
