import { MainLayout } from '@/layouts'
import theme from '@/theme'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Inter } from 'next/font/google'
import { ReactNode, useEffect, useState } from 'react'
// import { createEmotionCache } from '@/utils'
// import { CacheProvider } from '@emotion/react'

// const clientSideEmotionCache = createEmotionCache();

export default function RootLayout(props: { children: ReactNode }) {
	return (
		<html lang="en">
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
