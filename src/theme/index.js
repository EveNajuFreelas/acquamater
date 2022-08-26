import { createTheme } from "@mui/material";

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
   },
});

theme = createTheme(theme, {
   components: {
      MuiButton: {
         styleOverrides: {
            root: {
               backgroundColor: theme.palette.primary.main,
               color: theme.palette.secondary.main,
               textTransform: 'none',
               borderRadius: '100px',
               whiteSpace: 'nowrap',
               '&:hover': {
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.primary.main,
               }
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
      MuiContainer: {
         styleOverrides: {
            root: {
               margin: 'auto',
               width: '80%',
            }
         }
      },
      MuiTypography: {
         styleOverrides: {
            root: {
               color: '#44494A',
               letterSpacing: '1.5px',
               lineHeight: '1.6',
            },
         }
      }
   },
});

export { theme };
