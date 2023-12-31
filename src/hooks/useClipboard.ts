import copy from 'copy-to-clipboard';
import { useCallback, useEffect, useState } from 'react';

export function useClipboard(text: string, optionsOrTimeout: { timeout?: number } = {}) {
  const [hasCopied, setHasCopied] = useState(false);

  const { timeout = 1500, ...copyOptions } =
    typeof optionsOrTimeout === 'number' ? { timeout: optionsOrTimeout } : optionsOrTimeout;

  const handleCopy = useCallback(() => {
    const didCopy = copy(text, copyOptions);
    setHasCopied(didCopy);
  }, [text, copyOptions]);

  useEffect(() => {
    let timeoutId: number | null = null;

    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(false);
      }, timeout);
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, hasCopied]);

  return { value: text, handleCopy, hasCopied };
}
