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
		chip: { main: colors.gray, contrastText: colors.primary },
	},
	typography: {
		fontFamily: 'Museo',
		body1: {
			fontSize: '16px',
		},
		body1bold: {
			fontSize: '14px',
			fontWeight: 'bold',
		},
		body2: {
			fontSize: '12px',
		},
		body3: {
			fontSize: '15px',
			color: colors.gray,
		},
		h1: {
			fontSize: '33px',
			marginTop: '20px',
		},
		h2: {
			fontSize: '23px',
			fontWeight: 'bold',
		},
		h2lite: {
			fontSize: '23px',
			fontWeight: 'normal',
		},
		h3: {
			fontSize: '18px',
			fontWeight: 'bold',
		},
		h3lite: {
			fontSize: '18px',
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
						fontSize: '16px',
						fontWeight: 'bold',
						padding: '10px 25px',
						letterSpacing: '1.5px',
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
						color: '#fff',
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
			defaultProps: {
				maxWidth: 'md',
				margin: 'auto'
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
