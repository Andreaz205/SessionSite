import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundAboutMe: {
        'background': 'linear-gradient(180deg, rgba(169, 169, 169, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%)',
        'mix-blend-mode': 'luminosity'
      },
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
      'comfortaa': 'Comfortaa, SansSerif, serif',
    }
  },
  plugins: [],
}
export default config
