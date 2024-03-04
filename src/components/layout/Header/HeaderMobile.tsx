import { Box } from '@mui/material'
import Link from 'next/link'
import * as React from 'react'

export function HeaderMobile() {
	return (
		<Box
			display={{
				xs: 'block',
				lg: 'none',
			}}
		>
			{/* <Link href="/" legacyBehavior>
				<a>Home</a>
			</Link>
			<Link href="/blog" legacyBehavior>
				<a>Blog</a>
			</Link>
			<Link href="/works" legacyBehavior>
				<a>Works</a>
			</Link> */}
			HeaderMobile
		</Box>
	)
}
