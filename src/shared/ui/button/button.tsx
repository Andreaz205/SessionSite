import {} from "react";

import tw from "tailwind-styled-components";
import { ButtonProps } from "./button.type";
import { returnBaseClasses } from "./lib/return-base-classes";

export const Button = (props: ButtonProps) => {
  return (
    <ButtonEl {...props}>
      {props.icon && (props.iconPos === "start" || !props.iconPos) && (
        <IconWrap>
          <IconWrapper>{props.icon}</IconWrapper>
        </IconWrap>
      )}
      {props.children}
      {props.icon && props.iconPos === "end" && (
        <IconWrap>
          <IconWrapper>{props.icon}</IconWrapper>
        </IconWrap>
      )}
    </ButtonEl>
  );
};

const ButtonEl = tw.button<ButtonProps>`
${(p) =>
  returnBaseClasses({
    colorOnClick: p.colorOnClick,
    colorOnHover: p.colorOnHover,
    elColor: p.elColor,
    elSize: p.elSize,
    variant: p.variant,
  })}

  ${(p) => p.elSize === "sm" && "h-el-sm"}
  ${(p) => (p.elSize === "md" || !p.elSize) && "h-el-md"}
  ${(p) => p.elSize === "lg" && "h-el-lg"}

  overflow-hidden
  px-default-p
  rounded-md
`;

const IconWrap = tw.i``;

const IconWrapper = tw.div`w-4 h-4 [&>*]:w-full [&>*]:h-full`;
