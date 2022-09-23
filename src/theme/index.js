import { createTheme, responsiveFontSizes } from '@mui/material';
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
		chip : { main: colors.gray, contrastText: colors.primary },
	},
	typography: {
		fontFamily: 'Museo',
		body1: {
			fontSize: '18px',
		},
		body1bold: {
			fontSize: '16px',
			fontWeight: 'bold',
		},
		body2: {
			fontSize: '14px',
		},
		body3: {
			fontSize: '17px',
			color: colors.gray,
		},
		h1: {
			fontSize: '35px',
			marginTop: '20px',
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
			variants: [
				{
					props: { variant: 'outline' },
					style: {
						backgroundColor: theme.palette.primary.contrastText,
						color: colors.grayDark,
						border: `1px solid ${theme.palette.primary.main}`,
						fontSize: '18px',
						fontWeight: 'bold',
						padding: '10px 25px',
					},
				},
			],
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
				},
			},
		},
	},
});

theme = responsiveFontSizes(theme);

export { theme };
