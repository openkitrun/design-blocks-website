import * as React from "react";
import Link from "next/link";

import { MainNavItem } from "@/utils/docs/types";

import { useLockBody } from "@/hooks/useLockBody";

import cls from "@/utils/cls";

interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
  oncloseMenu?: () => void;
}

export function MobileNavigationDocs({
  children,
  items,
  oncloseMenu,
}: MobileNavProps) {
  useLockBody();

  return (
    <div
      className={cls(
        "animate-in slide-in-from-bottom-80 fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto sm:p-6 p-0 pb-32 shadow-md md:hidden"
      )}
    >
      <div className="text-popover-foreground relative z-20 grid gap-6 rounded-md bg-[#050505] p-4 shadow-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          <Link
            href="/docs"
            onClick={oncloseMenu}
            className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
          >
            Docs
          </Link>

          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              onClick={oncloseMenu}
              className={cls(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
}
