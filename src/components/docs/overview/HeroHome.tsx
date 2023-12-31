import Link from "next/link";

import IconBookOpen from "@/design-system/icons/BookOpen";
import IconArrowRightLine from "@/design-system/icons/ArrowRightLine";

import { Feedback } from "../Feedback";

function HeroHome() {
  return (
    <div className="mb-16 flex max-w-3xl flex-col px-4 sm:mx-auto">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-5xl font-medium">Documentation</h1>

        <p className="text-center text-zinc-400">
          Design Blocks an open-source library that focuses on the developer
          experience, offering complete control over style and customization in
          their projects
        </p>

        <div className="mt-4 flex justify-center gap-6">
          <Link
            href="/docs/installation"
            className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-black"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="mt-5">
        <Feedback
          title="Design Blocks is currently in development preview with unstable dependencies."
          description="While not planned, we may need to introduce breaking changes in these dependencies on the road to Design Blocks v1.0."
        />
      </div>

      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="w-full rounded-xl border border-yellow-700 bg-yellow-950 p-6">
          <div className="flex h-full flex-col justify-between gap-4">
            <div className="flex flex-col gap-4">
              <div className="h-11 w-11 rounded-md border border-dashed border-yellow-700 p-2">
                <IconBookOpen color="#eab308" />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-2xl text-yellow-500">Get started</h3>
                <p className="text-yellow-500">
                  Learn how to start integrating Design Blocks into your React
                  Native or Expo application.
                </p>
              </div>
            </div>

            <Link
              className="flex justify-end hover:cursor-pointer"
              href="/docs/installation"
            >
              <div className="flex flex-row items-center gap-4">
                <span className="text-yellow-300">Learn installation</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-yellow-700">
                  <IconArrowRightLine />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full rounded-xl border border-emerald-700 bg-emerald-950 p-6">
          <div className="flex h-full flex-col justify-between gap-4">
            <div className="flex flex-col gap-4">
              <div className="h-11 w-11 rounded-md border border-dashed border-emerald-300 p-2">
                <IconBookOpen color="#10b981" />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-2xl text-emerald-500">Primitives</h3>
                <p className="text-emerald-500">
                  Provides basic components and functions for custom UI
                  creation. Includes elements like Box, Stack, and Text,
                  essential for UI construction.
                </p>
              </div>
            </div>

            <Link
              className="flex justify-end hover:cursor-pointer"
              href="/docs/primitives"
            >
              <div className="flex flex-row items-center gap-4">
                <span className="text-emerald-300">Learn Primitives</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-emerald-700">
                  <IconArrowRightLine />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full rounded-xl border border-blue-700 bg-blue-950 p-6">
          <div className="flex h-full flex-col justify-between gap-4">
            <div className="flex flex-col gap-4">
              <div className="h-11 w-11 rounded-md border border-dashed border-blue-700 p-2">
                <IconBookOpen color="#3b82f6" />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-2xl text-blue-500">Unstyled</h3>
                <p className="text-blue-500">
                  Accessible, style-agnostic components, ideal for integration
                  in any Design Blocks project. Maximizes accessibility and
                  design flexibility.
                </p>
              </div>
            </div>

            <Link
              className="flex justify-end hover:cursor-pointer"
              href="/docs"
            >
              <div className="flex flex-row items-center gap-4">
                <span className="text-blue-300">Learn Unstyled</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-blue-700">
                  <IconArrowRightLine />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroHome;
