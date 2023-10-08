import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        opacity: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        }
      },
      animation: {
        opacity: 'opacity .2s ease',
      },
      backgroundAboutMe: {
        'background': 'linear-gradient(180deg, rgba(169, 169, 169, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%)',
        'mix-blend-mode': 'luminosity'
      },
      colors: {
        primary: "#7C4DFF",
        secondary: "#CEBDFF",
        warning: "orange",
        danger: "#A43030",
        success: "#3FBC62",
        "text-primary": "#0A0A0A",
        "text-secondary": "#757575",
        "text-light": "#BDBDBD",
        "text-contrast": "#F8F8F8",

        "background-1": "#F3EFFF",
        "background-2": "#F8F8F8",
        "background-3": "#FCFCFC",

        surface: "#F1F1F1",
      },
      spacing: {
        xs: "2rem",
        lg: "5rem",
        xxl: "7.1875rem",

        "screen-sm": "36rem",
        "screen-md": "48rem",
        "screen-lg": "62rem",
        "screen-xxl": "90rem",

        "default-p": "1.5rem",

        "el-sm": "2.25rem",
        "el-md": "2.75rem",
        "el-lg": "3.375rem",
      },
      cursor: {
        "chevronLeft" :" url(/images/chevron-left.svg)"
      }
    },
    screens: {
      sm: "36rem",
      md: "48rem",
      lg: "62rem",
      xxl: "90rem",
    },
    fontFamily: {
      'montserrat-bold': 'MontserratBold, SansSerif, serif',
      'montserrat-light': 'MontserratLight, SansSerif, serif',
      'montserrat-extralight': 'MontserratExtraLight, SansSerif, serif',
      'comfortaa': 'Comfortaa, SansSerif, serif',
      'druk-cyr': 'DrukCyr, SansSerif, serif',
      'raleway-black': 'RalewayBlack, SansSerif, serif',
      'raleway-regular': 'RalewayRegular, SansSerif, serif',
      'roboto': 'RobotoLight, SansSerif, serif',
    },
    borderRadius: {
      none: "0px",
      sm: "0.625rem",
      md: "2.5rem",
      full: "50%",
    },

    transitionDuration: {
      xs: "0.08s",
      sm: "0.16s",
      md: "0.32s",
      lg: "0.64s",
      xl: "0.88s",
    },
  },
  plugins: [],
}
export default config
