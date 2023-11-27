import * as React from "react";

import type { IconProps } from "../icons/types";

function IconDesignBlocksBasic({ size = 512, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M74.987 116.568c-4.284-7.421 1.071-16.696 9.64-16.696h209.655c8.568 0 13.923 9.275 9.639 16.696L199.094 298.134c-4.285 7.421-14.995 7.421-19.279 0L74.987 116.568zM171.784 368.116c0 35.347-28.654 64.001-64.001 64.001-35.346 0-64-28.654-64-64.001 0-35.346 28.654-64 64-64 35.347 0 64.001 28.654 64.001 64zM243.905 475c-30.611-17.673-41.099-56.816-23.425-87.427l131.855-228.38c17.674-30.611 56.816-41.099 87.427-23.426 30.611 17.673 41.099 56.815 23.425 87.426L331.332 451.574c-17.674 30.611-56.816 41.099-87.427 23.426z"
        fill="#fff"
      />
    </svg>
  );
}

export default IconDesignBlocksBasic;
