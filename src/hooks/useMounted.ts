import * as React from 'react';

export function useMounted() {
  const [mounted, setMounted] = React.useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
