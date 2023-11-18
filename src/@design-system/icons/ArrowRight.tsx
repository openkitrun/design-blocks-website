import * as React from "react";

export type CodeaProps = {
  size?: number;
  color?: string;
  className?: string;
};

function IconArrowRight({
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
        d="M13.171 12l-4.95-4.95 1.415-1.413L16 12l-6.364 6.364-1.414-1.415 4.95-4.95z"
        fill={color}
        className={className}
      />
    </svg>
  );
}

export default IconArrowRight;
