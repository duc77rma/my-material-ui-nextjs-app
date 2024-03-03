import * as React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/theme'
import { Inter } from 'next/font/google'
import { Box, Stack } from '@mui/material'
import { Footer, Header } from '@/components/layout'
import { MainLayout } from '@/layouts'
// import { createEmotionCache } from '@/utils'
// import { CacheProvider } from '@emotion/react'

// const clientSideEmotionCache = createEmotionCache();

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
})

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang="en" className={inter.className}>
			<body>
				<AppRouterCacheProvider options={{ enableCssLayer: true, key: 'css' }}>
					{/* <CacheProvider value={clientSideEmotionCache}> */}
					<ThemeProvider theme={theme}>
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<CssBaseline />
						<MainLayout>{props.children}</MainLayout>
					</ThemeProvider>
					{/* </CacheProvider> */}
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}
