import { createTheme } from '@mui/material';
import { colors } from './colors';

let theme = createTheme({
	palette: {
		primary: {
			main: colors.primary,
			contrastText: '#FFF',
		},
		secondary: { main: '#FFF', contrastText: colors.primary },
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
			fontWeight: 'bold',
		},
		body2: {
			fontSize: '14px',
		},
		h1: {
			fontSize: "35px",
			textTransform: "capitalize",
			marginTop: "20px",
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
						backgroundColor: colors.blueLighter,
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
				},
			},
			defaultProps: {
				maxWidth: 'lg',
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
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					backgroundColor: 'none',
					padding: 0,
				}
			}
		}
	},
});

export { theme };
