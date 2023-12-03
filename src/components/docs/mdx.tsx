import * as React from "react";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

import cls from "@/utils/cls";

import MdxCard from "./mdx-card";
import HeroHome from "./overview/HeroHome";
import { Tabs, Tab } from "./Tabs";

type MDXItemComponent = {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
};

const components = {
  h1: ({ className, ...props }: MDXItemComponent) => (
    <h1
      className={cls(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: MDXItemComponent) => (
    <h2
      className={cls(
        "mt-10 scroll-m-20 pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: MDXItemComponent) => (
    <h3
      className={cls(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: MDXItemComponent) => (
    <h4
      className={cls(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: MDXItemComponent) => (
    <h5
      className={cls(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: MDXItemComponent) => (
    <h6
      className={cls(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: MDXItemComponent) => (
    <a
      className={cls("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: MDXItemComponent) => (
    <p
      className={cls("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: MDXItemComponent) => (
    <ul className={cls("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: MDXItemComponent) => (
    <ol className={cls("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: MDXItemComponent) => (
    <li className={cls("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: MDXItemComponent) => (
    <blockquote
      className={cls(
        "[&>*]:text-muted-foreground mt-6 border-l-2 pl-6 italic",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cls("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cls("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cls("even:bg-muted m-0 border-t p-0", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: MDXItemComponent) => (
    <th
      className={cls(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: MDXItemComponent) => (
    <td
      className={cls(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: MDXItemComponent) => {
    return (
      <div className="mb-4 mt-6 overflow-x-auto rounded-lg bg-zinc-600/20 py-4">
        <div className="mb-1 flex flex-row justify-end px-4">
          <span className="text-xs font-semibold text-zinc-500">
            {props["data-language"]}
          </span>
        </div>

        <pre className={cls(className)} {...props} />
      </div>
    );
  },
  code: ({ className, ...props }: MDXItemComponent) => (
    <code
      className={cls(
        "relative rounded border border-zinc-700 bg-zinc-800 px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  Image,
  Card: MdxCard,
  HeroHome,
  Tabs,
  Tab,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="mdx">
      <Component components={components} />
    </article>
  );
}
