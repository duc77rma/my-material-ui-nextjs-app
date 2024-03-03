import { Footer, Header } from '@/components/layout'
import { Box, Stack } from '@mui/material'
import * as React from 'react'

export interface IMainLayoutProps {
	children: React.ReactNode
}

export function MainLayout({ children }: IMainLayoutProps) {
	return (
		<Stack minHeight="100vh">
			<Header />
			<Box component="main" flexGrow={1}>
				{children}
			</Box>
			<Footer />
		</Stack>
	)
}
