import { Box } from '@mui/material'
import Link from 'next/link'
import * as React from 'react'

export function Header() {
	return (
		<Box className="header" py={2} textAlign="center">
			<Link href="/" legacyBehavior>
				<a>Home</a>
			</Link>
			<Link href="/blog" legacyBehavior>
				<a>Blog</a>
			</Link>
			<Link href="/works" legacyBehavior>
				<a>Works</a>
			</Link>
		</Box>
	)
}
