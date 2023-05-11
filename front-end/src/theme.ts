import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import headingTheme from "./themes/heading";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  breakpoints: {
    xs: "320px",
  },
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
      200: "#204399",
    },
  },
  components: {
    Heading: {
      defaultProps: {},
      variants: {
        "heading-primary": {
          fontWeight: "medium",
          fontSize: "110px",
          textAlign: "center",
        },
        "heading-small": {
          fontWeight: "medium",
          fontSize: "60px",
          textAlign: "center",
        },
      },
    },
    Text: {
      variants: {
        "text-primary": {
          fontSize: "25px",
          fontWeight: "bold",
          letterSpacing: "1px",
        },
        "text-tertiary": {
          textTransform: "uppercase",
          fontSize: "13px",
          fontWeight: "bold",
          color: "gray.400",
          letterSpacing: "1px",
        },
      },
    },
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
        "btn-link": {
          bg: "none",
          color: "brand.100",
          fontWeight: "normal",
          paddingX: 0,
          justifyContent: "start",
        },
      },
    },
    Input: {
      variants: {
        "input-primary": {
          bg: "white",
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
        fontSize: { base: "16px", lg: "18px" },
      },
    },
  },
});

export default theme;
