import * as React from "react";

export type CodeaProps = {
  size?: number;
  color?: string;
  className?: string;
};

function IconFileCopy({
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
        d="M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 013 21l.003-14c0-.552.45-1 1.006-1H7zM5.002 8L5 20h10V8H5.002zM9 6h8v10h2V4H9v2z"
        fill={color}
        className={className}
      />
    </svg>
  );
}

export default IconFileCopy;
