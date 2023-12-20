"use client";

import * as Tooltip from "@radix-ui/react-tooltip";

import { useClipboard } from "@/hooks/useClipboard";
import IconArrowRightS from "@/design-system/icons/line/ArrowRightS";
import IconFileCopy from "@/design-system/icons/line/FileCopy";

export function CodeInstall() {
  const { handleCopy, hasCopied } = useClipboard(
    "npm i @design-blocks/native@latest"
  );

  return (
    <div>
      <div className="flex items-center gap-2 py-4 px-4 border border-blue-500">
        <IconArrowRightS />

        <code className="text-sm text-slate-50 font-mono">
          npm i @design-blocks/native@beta
        </code>

        <Tooltip.Root open={hasCopied}>
          <Tooltip.Trigger asChild>
            <button onClick={handleCopy}>
              <IconFileCopy />
            </button>
          </Tooltip.Trigger>

          <Tooltip.Portal>
            <Tooltip.Content
              className="select-none bg-gray-500/50 px-[15px] py-1 text-[15px] rounded-sm mb-5"
              sideOffset={5}
            >
              Copied!
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>
    </div>
  );
}
