import * as React from "react";

import Link from "next/link";

import { format } from "date-fns";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

import IconDb from "@/design-system/DB";

import { Header } from "@/components/header/Header";

type MainLayoutProps = {
  children?: React.ReactNode;
};

function MarketingLayout({ children }: MainLayoutProps) {
  return (
    <>
      <div className="max-w-7xl px-4 sm:mx-auto">
        <Header />
      </div>

      <main>{children}</main>

      <footer className="max-w-7xl px-4 py-20 sm:mx-auto">
        <div className="flex sm:flex-row flex-col gap-5">
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

          <div className="grow" />

          <a
            href="https://www.producthunt.com/products/design-blocks?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-design&#0045;blocks"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=564881&theme=dark"
              alt="Design&#0032;Blocks - Build&#0032;your&#0032;mobile&#0032;applications&#0032;React&#0032;Native&#0032;with&#0032;blocks&#0046; | Product Hunt"
              width="250"
              height="54"
            />
          </a>
        </div>
      </footer>
    </>
  );
}

export default MarketingLayout;
