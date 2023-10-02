import { Screen } from "@/src/shared/api/types";
import { screens } from "@/src/shared/api/data";

export const defineScreen = (width: number): Screen => {
  const widthAsRem = pxToRem(width);

  if (widthAsRem > 0 && widthAsRem < screens.sm) {
    return "xs";
  } else if (widthAsRem >= screens.sm && widthAsRem < screens.md) {
    return "sm";
  } else if (widthAsRem >= screens.md && widthAsRem < screens.lg) {
    return "md";
  } else if (widthAsRem >= screens.lg && widthAsRem < screens.xxl) {
    return "lg";
  } else return "xxl";
};

const pxToRem = (width: number) => {
  return width / 16;
};
