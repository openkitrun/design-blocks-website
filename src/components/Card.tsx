import { FC, ReactNode } from 'react';

import clsx from 'clsx';

export const Card: FC<{
  children: ReactNode;
  className?: string;
  shadow?: boolean;
}> = ({ children, className, shadow = false }) => {
  return (
    <div
      className={clsx(
        'overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950',
        shadow && 'shadow-lg shadow-zinc-900',
        className,
      )}
    >
      {children}
    </div>
  );
};
