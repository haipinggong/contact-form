import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    green: Palette["primary"];
  }
  interface PaletteOptions {
    green: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    fontWeightSemiBold: true;
  }
}

let theme = createTheme({
  typography: {
    fontFamily: "Karla, sans-serif",
  },
  palette: {
    green: {
      main: "#0C7D69",
      light: "#E0F1E8",
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: "2rem",
      lineHeight: "100%",
      letterSpacing: "-1px",
      fontWeight: theme.typography.fontWeightBold,
    },
    body1: {
      fontSize: "1.125rem",
      lineHeight: "150%",
    },
  },
  palette: {
    primary: {
      main: "#0C7D69",
    },
    secondary: {
      main: "#253347",
    },
    text: {
      primary: "#12131A",
      secondary: "#5E6E85",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
  },
});

export default theme;
