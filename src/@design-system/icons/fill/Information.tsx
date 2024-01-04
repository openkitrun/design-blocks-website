import * as React from "react";

export type CodeaProps = {
  size?: number;
  color?: string;
  className?: string;
};

function IconInformation({
  color = "#fff",
  size = 24,
  className,
  ...others
}: CodeaProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...others}
    >
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"
        fill={color}
        className={className}
      />
    </svg>
  );
}

export default IconInformation;
