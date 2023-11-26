"use client";

import React from "react";
import * as RadixTabs from "@radix-ui/react-tabs";

import cls from "@/utils/cls";

type TabsProps = {
  children: React.ReactNode;
  className?: string;
  items: string[];
  defaultValue?: string;
};

export const Tabs = ({
  children,
  className,
  items,
  defaultValue,
  ...props
}: TabsProps) => (
  <RadixTabs.Root
    className={cls("flex w-full flex-col", className)}
    defaultValue={defaultValue}
    {...props}
  >
    <RadixTabs.List
      className="flex flex-nowrap overflow-x-auto border-b border-zinc-700"
      aria-label="Manage your account"
    >
      {items.map((tb) => (
        <RadixTabs.Trigger
          key={tb}
          className="radix-state-active:border-b-transparent flex h-10 shrink-0 items-center px-4 text-sm text-zinc-100 hover:cursor-pointer hover:border-b-2 hover:border-zinc-300 focus:outline-none data-[state=active]:border-b-2 data-[state=active]:border-zinc-400"
          value={tb}
        >
          {tb}
        </RadixTabs.Trigger>
      ))}
    </RadixTabs.List>

    {children}
  </RadixTabs.Root>
);

type TabProps = {
  children: React.ReactNode;
  value: string;
};

export const Tab = ({ children, value }: TabProps) => (
  <RadixTabs.Content value={value}>{children}</RadixTabs.Content>
);
