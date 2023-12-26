"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { TagProgress } from "@/design-system/TagProgress";

import cls from "@/utils/cls";
import { SidebarNavItem } from "@/utils/docs/types";

export interface DocsSidebarNavProps {
  items: SidebarNavItem[];
  oncloseMenu?: () => void;
}

export function DocsSidebarNav({ items, oncloseMenu }: DocsSidebarNavProps) {
  const pathname = usePathname();

  return (
    <div className="w-full">
      {/* <div>
        <h4 className="text-md mb-1 rounded-md px-2 py-1 font-medium text-gray-100">
          Overview
        </h4>
      </div> */}

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
  );
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
        !item.disabled &&
        item.status !== "planned" &&
        item.status !== "wip" &&
        item.href ? (
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
            <TagProgress type={item.status} />
          </Link>
        ) : (
          <div
            key={index}
            className="flex w-full cursor-not-allowed items-center"
          >
            <span className="flex  items-center rounded-md p-2 opacity-40">
              {item.title}
            </span>

            <TagProgress type={item.status} />
          </div>
        )
      )}
    </div>
  ) : (
    <>No sidebar</>
  );
}
