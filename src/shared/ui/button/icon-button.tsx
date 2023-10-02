import tw from "tailwind-styled-components";
import {IconButtonProps} from "./button.type";
import {returnBaseClasses} from "./lib/return-base-classes";


export const IconButton = (props: IconButtonProps) => {
  return (
    <IconButtonEl {...props}>
      <IconWrapper>{props.children}</IconWrapper>
    </IconButtonEl>
  );
};

const IconButtonEl = tw.button<IconButtonProps>`
${(p) =>
  returnBaseClasses({
    colorOnClick: p.colorOnClick,
    colorOnHover: p.colorOnHover,
    elColor: p.elColor,
    elSize: p.elSize,
    variant: p.variant,
  })}

${(p) => p.elSize === "sm" && "w-el-sm h-el-sm"}
${(p) => (p.elSize === "md" || !p.elSize) && "w-el-md h-el-md"}
${(p) => p.elSize === "lg" && "w-el-lg h-el-md"}

rounded-full
`;

const IconWrapper = tw.span`block w-[1.1rem] h-[1.1rem] [&>*]:w-full [&>*]:h-full`;
