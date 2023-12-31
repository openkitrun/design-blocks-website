import * as React from "react";

import Link from "next/link";

import { EnjoyCreating } from "@/components/home/enjoy-creating/EnjoyCreating";
import { CodeInstall } from "@/components/home/CodeInstall";

export default async function HomePage() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-900/25 via-[#050505] to-[#050505]">
        <div className="border-t border-zinc-800 py-12">
          <section className="mx-4 flex max-w-5xl flex-col px-4 sm:mx-auto">
            <div className="flex flex-col gap-12">
              <h1 className="text-center text-6xl font-semibold leading-none sm:text-8xl">
                <span className="inline-block bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
                  Build
                </span>{" "}
                your mobile applications React Native with{" "}
                <span className="inline-block bg-gradient-to-r from-pink-400 via-blue-500 to-violet-400 bg-clip-text text-transparent">
                  blocks
                </span>
              </h1>

              <div className="mx-auto max-w-sm sm:max-w-3xl">
                <p className="text-center text-3xl leading-relaxed tracking-widest">
                  An open-source library that focuses on the{" "}
                  <span className="rounded-md bg-emerald-950 px-2 py-1 text-emerald-500">
                    developer
                  </span>{" "}
                  experience, offering complete control over style and{" "}
                  <span className="rounded-md bg-rose-950 px-2 py-1 text-rose-500">
                    customization
                  </span>{" "}
                  in their projects.
                </p>
              </div>
            </div>

            <div className="mt-16 flex flex-col justify-center gap-6 sm:flex-row">
              <Link
                href="/docs"
                className="rounded-2xl bg-white px-10 py-4 text-xl font-semibold text-black"
              >
                Get Started
              </Link>

              <CodeInstall />
            </div>
          </section>
        </div>
      </div>

      <section className="bg-gray-500/10 py-24">
        <div className="flex max-w-2xl flex-col px-4 sm:mx-auto">
          <div className="flex flex-col gap-8">
            <p className="text-xl tracking-wider subpixel-antialiased">
              <span className="inline-block bg-gradient-to-r from-sky-400 via-indigo-500 to-fuchsia-400 bg-clip-text text-transparent">
                It’s important to note that this library is not a UI Kit.
              </span>
            </p>

            <p className="text-xl tracking-wider subpixel-antialiased">
              The library it provides low-level functionality for developers who
              either want{" "}
              <span className="inline-block bg-gradient-to-r from-emerald-400 via-emerald-500 to-sky-400 bg-clip-text text-transparent">
                full control of styling in their projects.
              </span>
            </p>

            <p className="text-xl tracking-wider subpixel-antialiased">
              Build apps intuitively, with no steep learning curve. Our goal is
              to fast-track your next app to production.
            </p>

            <p className="text-xl tracking-wider subpixel-antialiased">
              At Design Blocks, we aim to make our blocks the key for quick app
              assembly,{" "}
              <span className="text-gray-400">
                while always preserving the unique essence and personality of
                each project.
              </span>
            </p>

            <p className="text-xl tracking-wider subpixel-antialiased">
              It’s also worth mentioning that with design blocks you can{" "}
              <span className="inline-block bg-gradient-to-r from-rose-400 via-orange-500 to-fuchsia-400 bg-clip-text text-transparent">
                create your design system.
              </span>
            </p>
          </div>
        </div>
      </section>

      <EnjoyCreating />
    </>
  );
}
