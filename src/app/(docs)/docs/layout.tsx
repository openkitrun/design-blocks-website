import { docsConfig } from "@/utils/docs";
import { DocsSidebarNav } from "@/components/docs/sidebar-nav";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
      <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r border-zinc-800 py-6 pr-2 hover:overflow-y-auto md:sticky md:block lg:py-10 overflow-y-hidden">
        <div className="pt-4">
          <DocsSidebarNav items={docsConfig.sidebarNav} />
        </div>
      </aside>
      {children}
    </div>
  );
}
