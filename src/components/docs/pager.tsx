import Link from "next/link";
import { Doc } from "@/contentlayer/generated";

import ArrowRightIcon from "@/design-system/icons/ArrowRight";
import ArrowLeftIcon from "@/design-system/icons/ArrowLeft";

import { docsConfig } from "@/utils/docs";

interface DocsPagerProps {
  doc: Doc;
}

export function DocsPager({ doc }: DocsPagerProps) {
  const pager = getPagerForDoc(doc);

  if (!pager) {
    return null;
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev && (
        <Link
          href={pager.prev.href}
          className="flex flex-row items-center gap-2"
        >
          <ArrowLeftIcon />
          {pager.prev.title}
        </Link>
      )}

      {pager?.next && (
        <Link
          href={pager.next.href}
          className="flex flex-row items-center gap-2 ml-auto"
        >
          <span>{pager.next.title}</span>
          <ArrowRightIcon />
        </Link>
      )}
    </div>
  );
}

export function getPagerForDoc(doc: Doc) {
  const flattenedLinks = [null, ...flatten(docsConfig.sidebarNav), null];
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href
  );
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;
  return {
    prev,
    next,
  };
}

//@ts-ignore
export function flatten(links: { items? }[]) {
  return links.reduce((flat, link) => {
    return flat.concat(link.items ? flatten(link.items) : link);
  }, []);
}
