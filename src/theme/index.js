import { createTheme } from '@mui/material';
import { colors } from "./colors";

let theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      light: colors.blueLighter,
      contrastText: "#FFF",
    },
    secondary: { main: "#FFF", contrastText: "#000" },
    action: { main: "#FF0000" },
    text: {
      light: "#97A0AF",
      main: "#97A0AF",
      dark: "#97A0AF",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
  },

  typography: {
    fontFamily: "Museo",
    root: {},

    body1: {
      fontSize: "16px",
      lineHeight: 2,
    },
    h3: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    h1: {
      fontSize: "36px",
      textTransform: "capitalize",
    },
    subtitle1: {
      fontSize: "18px",
      lineHeight: 2,
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.secondary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: "secondary",
        },
      },
    },
  },
});

export { theme };
