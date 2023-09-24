import tw from "tailwind-styled-components";
import {TypographyVariants, TypographyVariantsEnum} from "@/src/shared/api/types";

type TypographyVariant = {
    variant?: TypographyVariants
}

export const Typography = tw.p<TypographyVariant>`
    text-white
    ${(p => p.variant === TypographyVariantsEnum.BASE && 'text-base')}
    ${(p => p.variant === TypographyVariantsEnum.BLUE_SM && 'text-sm text-sky-300')}
    ${(p => p.variant === TypographyVariantsEnum.SEMIBOLD_SM && 'text-sm font-medium')}
    ${(p => p.variant === TypographyVariantsEnum.XXXL && 'text-[3.5rem]')}
    ${(p => p.variant === TypographyVariantsEnum.LIGHT_2XL && 'text-2xl font-light')}
`