import { createTheme } from '@mui/material';
import { colors } from './colors';

let theme = createTheme({
	palette: {
		primary: {
			main: '#003b80',
			contrastText: '#FFF',
		},
		secondary: { main: '#FFF', contrastText: '#003b80' },
		action: { main: '#FF0000' },
		title: { main: '#A5D513' },
		text: { main: '#44494A' },
	},
	typography: {
		fontFamily: 'Museo',
		body1: {
			fontSize: '16px',
		},
		body1bold: {
			fontSize: '16px',
			fontWeight: '300',
		},
		h2: {
			fontSize: '25px',
			fontWeight: 'bold',
		},
		h2lite: {
			fontSize: '25px',
			fontWeight: 'normal',
		},
		h3: {
			fontSize: '20px',
			fontWeight: 'bold',
		},
		h3lite: {
			fontSize: '20px',
			fontWeight: 'normal',
		},
	},
});

theme = createTheme(theme, {
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					'backgroundColor': theme.palette.primary.main,
					'color': theme.palette.primary.contrastText,
					'textTransform': 'none',
					'borderRadius': '100px',
					'whiteSpace': 'nowrap',
					'&:hover': {
						backgroundColor: theme.palette.primary.contrastText,
						color: theme.palette.primary.main,
					},
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					color: 'secondary',
				},
			},
		},
		MuiContainer: {
			styleOverrides: {
				root: {
					margin: 'auto',
					width: '80%',
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					color: theme.palette.text.main,
					letterSpacing: '1.5px',
					lineHeight: '1.6',
				},
			},
		},
	},
});

export { theme };
