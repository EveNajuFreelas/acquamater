import { createTheme } from "@mui/material";

let theme = createTheme({
   palette: {
      primary: {
         main: "#003b80",
         light: "#009FE3",
         contrastText: "#FFF",
      },
      secondary: { main: "#FFF" },
      action: { main: "#FF0000" },
      neutral: {main: "#676C6E"},
   },
   typography: {
      fontFamily:'museo',
      body1: {
         fontSize: "20px",
         color: "#676C6E"
      },
      body2: {
         fontSize: "20px",
         color: "#009FE3"
      },
      h2: {
         fontSize: "36px",
         fontWeight: "bold",
         textTransform: "uppercase",
      },
   },
});

theme = createTheme(theme, {
   components: {
      MuiButton: {
         styleOverrides: {
            root: {
               backgroundColor: theme.palette.primary.main,
               color: theme.palette.secondary.main,
               '&:hover': {
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.secondary.main,
               }
            }
         },
      },
      MuiAppBar: {
         color: "secondary",
      },
   },
});

export { theme };
