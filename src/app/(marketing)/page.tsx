import * as React from "react";

import Link from "next/link";

import { EnjoyCreating } from "@/components/home/enjoy-creating/EnjoyCreating";

export default async function HomePage() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-900/25 via-[#050505] to-[#050505]">
        <div className="border-t border-zinc-800 py-12">
          <section className="mx-4 flex max-w-5xl flex-col px-4 sm:mx-auto">
            <div className="mb-4 flex justify-center">
              <div className="flex flex-row items-center gap-3 rounded-full bg-amber-950/40 px-5 py-2 text-amber-500">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-900/40">
                  <div className="h-2 w-2 rounded-full bg-amber-900" />
                </div>
                <span>work in progress</span>
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <h1 className="text-center sm:text-8xl text-6xl font-semibold leading-none">
                <span className="inline-block bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
                  Build
                </span>{" "}
                your mobile applications React Native with{" "}
                <span className="inline-block bg-gradient-to-r from-pink-400 via-blue-500 to-violet-400 bg-clip-text text-transparent">
                  blocks
                </span>
              </h1>

              <div className="mx-auto sm:max-w-3xl max-w-sm">
                <p className="text-center text-3xl leading-relaxed tracking-widest">
                  An open source UI component library that focuses on{" "}
                  <span className="rounded-md bg-rose-950 px-2 py-1 text-rose-500">
                    customization
                  </span>
                  ,
                  <span className="rounded-md bg-emerald-950 px-2 py-1 text-emerald-500">
                    developer
                  </span>{" "}
                  experience, and building mobile apps with{" "}
                  <span className="rounded-md bg-blue-950 px-2 py-1 text-blue-500">
                    react-native
                  </span>{" "}
                  or{" "}
                  <span className="rounded-md bg-zinc-900 px-2 py-1 text-zinc-400">
                    Expo
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-16 flex sm:flex-row flex-col justify-center gap-6">
              <Link
                href="/docs"
                className="rounded-2xl bg-white px-10 py-4 text-xl font-semibold text-black"
              >
                Get Started
              </Link>

              <Link
                href="/docs"
                className="rounded-2xl bg-white px-10 py-4 text-xl font-semibold text-black"
              >
                Learn Design Blocks
              </Link>
            </div>
          </section>
        </div>
      </div>

      <section className="bg-gray-500/10 py-24">
        <div className="flex max-w-2xl flex-col px-4 sm:mx-auto">
          <div className="flex flex-col gap-8">
            <p className="text-xl tracking-wider subpixel-antialiased">
              <span className="inline-block bg-gradient-to-r from-sky-400 via-indigo-500 to-fuchsia-400 bg-clip-text text-transparent">
                Design Blocks: Streamline your React Native or Expo development.
              </span>{" "}
              Build apps intuitively, with no steep learning curve. Our goal is
              to fast-track your next app to production.
            </p>

            <p className="text-xl tracking-wider subpixel-antialiased">
              We firmly believe in providing developers with the best tools. Our
              goal is to build a strong community where you come first,{" "}
              <span className="inline-block bg-gradient-to-r from-emerald-400 via-emerald-500 to-sky-400 bg-clip-text text-transparent">
                empowering you to create great things.
              </span>
            </p>

            <p className="text-xl tracking-wider subpixel-antialiased">
              At Design Blocks, we aim to make our blocks the key for quick app
              assembly,{" "}
              <span className="text-gray-400">
                while always preserving the unique essence and personality of
                each project.
              </span>
            </p>
          </div>
        </div>
      </section>

      <EnjoyCreating />
    </>
  );
}
