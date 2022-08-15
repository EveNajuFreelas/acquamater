import { createTheme } from '@mui/material';

let theme = createTheme({
   palette: {
      primary: {
         main: "#003b80",
         contrastText: "#FFF",
      },
      secondary: { main: "#FFF", contrastText: "#000" },
      action: { main: "#FF0000" },
   },
   typography: {
      fontFamily: "Museo",
      body1: {
         fontSize: "16px",
      },
      h2: {
         fontSize: "18px",
         fontWeight: "bold",
         textTransform: "capitalize",
      },
      h1: {
         fontSize: "36px",
         textTransform: "capitalize",
      },
      subtitle1: {
         fontSize: "18px",
      }
   },
});

theme = createTheme(theme, {
   components: {
      MuiButton: {
         styleOverrides: {
            root: {
               backgroundColor: theme.palette.primary.main,
               color: theme.palette.secondary.main,
            },
         },
      },
      MuiAppBar: {
         styleOverrides: {
            root: {
               color: "secondary",
            }
         }
      },
   },
});

export { theme };
