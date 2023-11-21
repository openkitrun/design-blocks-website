import * as React from "react";

import Link from "next/link";

import { format } from "date-fns";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

import IconDb from "@/design-system/DB";

import NavigationMenu from "@/components/navigation/NavigationMenu";

type MainLayoutProps = {
  children?: React.ReactNode;
};

function MarketingLayout({ children }: MainLayoutProps) {
  return (
    <>
      <div className="flex max-w-7xl flex-col px-4 sm:mx-auto">
        <header className="py-3">
          <nav className="flex h-full flex-row items-center">
            <div className="">
              <Link href="/">
                <IconDb size={180} />
              </Link>
            </div>

            <div className="grow" />

            <div className="flex-none">
              <NavigationMenu />
            </div>
          </nav>
        </header>
      </div>

      <main>{children}</main>

      <footer className="flex max-w-7xl flex-col px-4 sm:mx-auto">
        <div className="py-20">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-5">
              <IconDb size={150} />

              <Link href="/">
                <SiGithub size={18} />
              </Link>
              <Link href="/">
                <SiX size={18} />
              </Link>
            </div>

            <div>
              <time className="text-xs">
                Copyright © {format(new Date(), "yyyy")} openkitrun All rights
                reserved.
              </time>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MarketingLayout;
