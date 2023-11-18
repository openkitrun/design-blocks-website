import * as React from "react";

export type CodeaProps = {
  size?: number;
  color?: string;
  className?: string;
};

function IconArrowLeft({
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
        d="M10.828 12l4.95 4.95-1.414 1.415L8 12l6.364-6.364 1.414 1.414-4.95 4.95z"
        fill={color}
        className={className}
      />
    </svg>
  );
}

export default IconArrowLeft;
