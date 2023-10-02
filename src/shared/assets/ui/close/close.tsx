import {} from "react";
import { Icon } from "@/src/shared/api/types";

export const Close = (props: Icon) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.875 0.875L12.125 12.125"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M12.125 0.875L0.875 12.125"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
};
