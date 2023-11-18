import { SiteFooter } from "@/components/docs/site-footer";

import NavigationMenuDocs from "@/components/navigation/NavigationMenuDocs";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavigationMenuDocs />

      <div className="px-4 sm:mx-auto">{children}</div>
      <SiteFooter className="border-t" />
    </div>
  );
}
