import {Colors, ElementVariants, Sizes} from "@/src/shared/api/types";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonBase {
  fullWidth?: boolean;
  icon?: React.ReactNode | null | undefined;
  iconPos?: IconPos;
}

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonBase {}

type IconPos = "start" | "end";

export type ButtonBase = {
  variant?: ElementVariants;
  elColor?: Colors;
  colorOnClick?: Colors;
  colorOnHover?: Colors;
  elSize?: Sizes;
};
