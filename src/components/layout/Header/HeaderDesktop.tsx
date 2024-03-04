'use client'

import { Container, Link as MuiLink, Stack } from '@mui/material'
import { Box } from '@mui/system'
import { usePathname, useRouter } from 'next/navigation'
import { ROUTE_LIST } from './routes'
import clsx from 'clsx'
import Link from 'next/link'

export function HeaderDesktop() {
	// const router = useRouter();
	const pathname = usePathname()

	return (
		<Box
			display={{
				xs: 'none',
				md: 'block',
			}}
			py={2}
		>
			<Container>
				<Stack direction="row" justifyContent="flex-end">
					{ROUTE_LIST.map((route) => (
						<Link key={route.path} href={route.path} passHref legacyBehavior>
							<MuiLink
								variant="body1"
								key={route.path}
								sx={{ ml: 2, fontWeight: '700' }}
								className={clsx({ active: pathname === route.path })}
							>
								{route.label}
							</MuiLink>
						</Link>
					))}
				</Stack>
			</Container>
		</Box>
	)
}
