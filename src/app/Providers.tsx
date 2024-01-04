'use client';

import * as React from 'react';

import * as Tooltip from '@radix-ui/react-tooltip';

function Providers({ children }: { children: React.ReactNode }) {
  return <Tooltip.Provider>{children}</Tooltip.Provider>;
}

export default Providers;
