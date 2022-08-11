import { createTheme } from '@mui/material';

let theme = createTheme({
	palette: {
		primary: {
			main: '#003b80',
			contrastText: '#FFF',
		},
		secondary: { main: '#FFF' },
		action: { main: '#FF0000' },
	},
	typography: {
		body1: {
			fontSize: '18px',
		},
		h2: {
			fontSize: '28px',
			fontWeight: 'bold',
			textTransform: 'capitalize',
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
				},
			},
		},
		MuiAppBar: {
			color: 'secondary',
		},
	},
});

export { theme };
