"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import cls from "@/utils/cls";
import { SidebarNavItem } from "@/utils/docs/types";

export interface DocsSidebarNavProps {
  items: SidebarNavItem[];
  oncloseMenu?: () => void;
}

export function DocsSidebarNav({ items, oncloseMenu }: DocsSidebarNavProps) {
  const pathname = usePathname();

  return items.length ? (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="pb-8">
          <h4
            className={cls(
              "text-md mb-1 rounded-md px-2 py-1 font-medium text-gray-100"
              // {
              //   "bg-blue-800/40 text-white": pathname.startsWith(
              //     item.href as string,
              //   ),
              // },
            )}
          >
            {item.title}
          </h4>

          {item.items ? (
            <DocsSidebarNavItems
              onClick={oncloseMenu}
              items={item.items}
              pathname={pathname}
            />
          ) : null}
        </div>
      ))}
    </div>
  ) : null;
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
  onClick?: () => void;
}

export function DocsSidebarNavItems({
  items,
  pathname,
  onClick,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        !item.disabled && !item.isWIP && !item.isPlanned && item.href ? (
          <Link
            key={index}
            href={item.href}
            onClick={onClick}
            className={cls(
              "flex w-full items-center gap-3 rounded-md p-2 text-gray-400 hover:underline",
              {
                "text-blue-600": pathname === item.href,
              }
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}

            {item.isBeta && (
              <span className="rounded-sm border border-blue-400 bg-blue-500/10 px-2 py-0 text-[8.5px] text-blue-300">
                Beta
              </span>
            )}

            {item.isExperimental && (
              <span className="rounded-sm border border-red-400 bg-red-500/10 px-2 py-0 text-[8.5px] text-red-300">
                Experimental
              </span>
            )}
          </Link>
        ) : (
          <div key={index} className="flex w-full  items-center">
            <span className="flex cursor-not-allowed items-center rounded-md p-2 opacity-40">
              {item.title}
            </span>

            {item.isWIP && (
              <span className="rounded-sm border border-yellow-400 bg-yellow-500/10 px-2 py-0 text-[8.5px] text-yellow-300">
                Wip
              </span>
            )}

            {item.isPlanned && (
              <span className="rounded-sm border border-gray-400 bg-gray-500/10 px-2 py-0 text-[8.5px] text-gray-300">
                Planned
              </span>
            )}
          </div>
        )
      )}
    </div>
  ) : (
    <>No sidebar</>
  );
}
