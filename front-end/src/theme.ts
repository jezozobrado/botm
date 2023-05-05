import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { Fonts } from "./components/Fonts";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
    brand: {
      100: "#11afe2",
    },
  },
  components: {
    Button: {
      variants: {
        "btn-primary": {
          bg: "brand.100",
          color: "white",
          fontWeight: "normal",
        },
        "btn-secondary": {
          bg: "white",
          color: "brand.100",
          borderColor: "black",
          border: "1px",
          fontWeight: "normal",
        },
      },
    },
  },
  fonts: {
    heading: "Patua One",
    body: "Figtree",
  },
  styles: {
    global: {
      body: {
        fontSize: { base: "18px", lg: "20px" },
      },
    },
  },
});

export default theme;
