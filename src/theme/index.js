import { createTheme } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#00ADEF',
            contrastText: '#FFF'
        },
        secondary: { main: '#FFF'},
        action: { main: '#FF0000' }
    },
    components: {
        MuiAppBar: {
            color: 'secondary',
        }
    }
});

theme = createTheme(theme, {
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.secondary.main
                }
            }
        }
    }
});

export { theme }
