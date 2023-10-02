import { ButtonBase } from "../button.type";

export const returnBaseClasses = (p: ButtonBase) => {
  return `
  flex
items-center
justify-center
shrink-0
gap-2

${p.variant === "outlined" && "border-[0.0625rem]"}
    
${p.variant === "contained" && "shadow-sm hover:shadow-md"}


${
  p.variant === "outlined" &&
  (p.elColor === "inherit" || !p.elColor) &&
  "border-text-light [&>*]:text-text-light"
}
${
  p.variant === "outlined" &&
  p.elColor === "contrast" &&
  "border-text-primary [&>*]:text-text-primary"
}
${
  p.variant === "outlined" &&
  p.elColor === "primary" &&
  "border-primary [&>*]:text-primary"
}
${
  p.variant === "outlined" &&
  p.elColor === "secondary" &&
  "border-secondary [&>*]:text-text-secondary"
}
${
  p.variant === "outlined" &&
  p.elColor === "danger" &&
  "border-danger [&>*]:text-danger text-danger"
}
${
  p.variant === "outlined" &&
  p.elColor === "warning" &&
  "border-warning [&>*]:text-warning"
}
${
  p.variant === "outlined" &&
  p.elColor === "success" &&
  "border-success [&>*]:text-success"
}

${
  p.variant === "outlined" &&
  p.colorOnHover === "inherit" &&
  "hover:border-text-primary [&>*]:hover:text-text-primary"
}
${
  p.variant === "outlined" &&
  p.colorOnHover === "contrast" &&
  "hover:border-text-primary [&>*]:hover:text-text-primary hover:text-text-primary"
}
${
  p.variant === "outlined" &&
  p.colorOnHover === "primary" &&
  "hover:border-primary [&>*]:hover:text-primary hover:text-primary"
}
${
  p.variant === "outlined" &&
  p.colorOnHover === "secondary" &&
  "hover:border-secondary [&>*]:hover:text-secondary hover:text-secondary"
}
${
  p.variant === "outlined" &&
  p.colorOnHover === "danger" &&
  "hover:border-danger [&>*]:hover:text-danger hover:text-danger"
}
${
  p.variant === "outlined" &&
  p.colorOnHover === "warning" &&
  "hover:border-warning [&>*]:hover:text-warning hover:text-warning"
}
${
  p.variant === "outlined" &&
  p.colorOnHover === "success" &&
  "hover:border-success [&>*]:hover:text-success hover:text-success"
}

${
  p.variant === "outlined" &&
  p.colorOnClick === "inherit" &&
  "active:border-text-primary [&>*]:active:text-text-primary active:text-text-primary"
}
${
  p.variant === "outlined" &&
  p.colorOnClick === "contrast" &&
  "active:border-text-primary [&>*]:active:text-text-primary active:text-text-primary"
}
${
  p.variant === "outlined" &&
  p.colorOnClick === "primary" &&
  "active:border-primary [&>*]:active:text-primary active:text-primary"
}
${
  p.variant === "outlined" &&
  p.colorOnClick === "secondary" &&
  "active:border-secondary [&>*]:active:text-secondary active:text-secondary"
}
${
  p.variant === "outlined" &&
  p.colorOnClick === "danger" &&
  "active:border-danger [&>*]:active:text-danger active:text-danger"
}
${
  p.variant === "outlined" &&
  p.colorOnClick === "warning" &&
  "active:border-warning [&>*]:active:text-warning active:text-warning"
}
${
  p.variant === "outlined" &&
  p.colorOnClick === "success" &&
  "active:border-success [&>*]:active:text-success active:text-success"
}

${(p.variant === "contained" || !p.variant) && "shadow-sm hover:shadow-md"}


${
  (p.variant === "contained" || !p.variant) &&
  (p.elColor === "inherit" || !p.elColor) &&
  "bg-background-2 text-text-primary"
}
${
  (p.variant === "contained" || !p.variant) &&
  p.elColor &&
  p.elColor !== "inherit" &&
  "text-text-contrast"
}

${
  (p.variant === "contained" || !p.variant) &&
  p.elColor === "primary" &&
  "bg-primary"
}
${
  (p.variant === "contained" || !p.variant) &&
  p.elColor === "secondary" &&
  "bg-secondary"
}
${
  (p.variant === "contained" || !p.variant) &&
  p.elColor === "warning" &&
  "bg-warning"
}
${
  (p.variant === "contained" || !p.variant) &&
  p.elColor === "danger" &&
  "bg-danger"
}
${
  (p.variant === "contained" || !p.variant) &&
  p.elColor === "success" &&
  "bg-success"
}
${
  (p.variant === "contained" || !p.variant) &&
  p.elColor === "contrast" &&
  "bg-text-primary"
}

${
  (p.variant === "contained" || !p.variant) &&
  p.colorOnHover === "primary" &&
  "hover:bg-primary"
}
${
  (p.variant === "contained" || !p.variant) &&
  p.colorOnHover === "secondary" &&
  "hover:bg-secondary"
}
${
  (p.variant === "contained" || !p.variant) &&
  p.colorOnHover === "warning" &&
  "hover:bg-warning"
}
${
  (p.variant === "contained" || !p.variant) &&
  p.colorOnHover === "danger" &&
  "hover:bg-danger"
}
${
  (p.variant === "contained" || !p.variant) &&
  p.colorOnHover === "success" &&
  "hover:bg-success"
}
${
  (p.variant === "contained" || !p.variant) &&
  p.colorOnHover === "contrast" &&
  "hover:bg-text-contrast"
}

${
  p.variant === "outlined" &&
  p.colorOnHover === "inherit" &&
  "[&>*]:text-text-primary"
}

${
  (p.variant === "contained" || !p.variant) &&
  p.colorOnHover === "inherit" &&
  "active:text-text-primary"
}


${
  (p.variant === "contained" || !p.variant) &&
  p.colorOnClick === "primary" &&
  "active:bg-primary"
}
${
  (p.variant === "contained" || !p.variant) &&
  p.colorOnClick === "secondary" &&
  "active:bg-secondary"
}
${
  (p.variant === "contained" || !p.variant) &&
  p.colorOnClick === "warning" &&
  "active:bg-warning"
}
${
  (p.variant === "contained" || !p.variant) &&
  p.colorOnClick === "danger" &&
  "active:bg-danger"
}
${
  (p.variant === "contained" || !p.variant) &&
  p.colorOnClick === "success" &&
  "active:bg-success"
}
${
  (p.variant === "contained" || !p.variant) &&
  p.colorOnClick === "contrast" &&
  "active:bg-text-contrast"
}
${
  (p.variant === "contained" || !p.variant) &&
  p.colorOnClick === "inherit" &&
  "active:text-text-primary"
}

whitespace-nowrap

disabled:grayscale-[100%]

disabled:hover:scale-100
disabled:active:scale-100
disabled:hover:shadow-none
disabled:hover:brightness-100

active:duration-sm
active:scale-[0.9]
[&:active>*]:duration-sm
duration-md
[&>*]:duration-md
ease-in-out
    `;
};
