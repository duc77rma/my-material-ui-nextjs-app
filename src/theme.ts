'use client'
import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { Heebo } from 'next/font/google'

export const heebo = Heebo({
	weight: ['300', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
})

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#FF6464',
		},
		secondary: {
			main: '#00A8CC',
			light: '#EDF7FA',
		},
		error: {
			main: red.A400,
		},
		text: {
			primary: '#21243D'
		},
	},
	typography: {
		fontFamily: heebo.style.fontFamily,
	},
	components: {
		MuiAlert: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					...(ownerState.severity === 'info' && {
						backgroundColor: '#60a5fa',
					}),
				}),
			},
		},
		MuiContainer: {
			defaultProps: {
				maxWidth: 'md',
			},
			styleOverrides: {
				maxWidthSm: {
					maxWidth: '680px',

					'@media (min-width: 600px)': {
						maxWidth: '680px',
					},
				},
				maxWidthMd: {
					maxWidth: '860px',

					'@media (min-width: 900px)': {
						maxWidth: '860px',
					},
				},

				root: {
					padding: '0 !important',
				},
			},
			// variants: [],
		},
		MuiLink: {
			defaultProps: {
				underline: 'none',
			},
			styleOverrides: {
				root: {
					color: 'black',
					'&:hover, &.active': {
						color: '#FF6464',
					},
				},
			},
		},
		MuiButton: {
			variants: [
				{
					props: {
						variant: 'contained',
						color: 'primary',
					},
					style: {
						color: 'white',
					},
				},
			],
		},
	},
})

export default theme
