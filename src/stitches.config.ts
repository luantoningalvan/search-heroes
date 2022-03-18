import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray100: "#e4e5e9",
      gray400: "#9e9e9e",
      gray700: "#404040",
      gray800: "#333333",
      red50: "#fdecec",
      red200: "#fa7676",
      red500: "#ff0000",
    },
  },
  media: {
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    xxl: "(min-width: 1400px)",
  },
});
