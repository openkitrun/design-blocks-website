import * as React from "react";

import type { NextPage } from "next";

export type NextPageLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
  auth?: boolean;
};

export type Nullable<T> = T | null;

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  isBeta?: boolean;
  isProgress?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  //icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: { title: string; href: string; disabled?: boolean }[];
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
  twitter: {
    creator: string;
  };
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type SubscriptionPlan = {
  name: string;
  description: string;
  stripePriceId: string;
};
