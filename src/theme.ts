'use client'
import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
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
		},
		error: {
			main: red.A400,
		},
	},
	typography: {
		fontFamily: roboto.style.fontFamily,
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
	},
})

export default theme
