import { Box, Container, Stack, Typography, Link as MuiLink, Card } from '@mui/material'
import Link from 'next/link'
import * as React from 'react'
import { PostCard } from './postCard'
import { Post } from '@/models'

export interface IRecentSectionProps {}

export function RecentSection(props: IRecentSectionProps) {
	const postLists: Post[] = [
		{
			id: '1',
			title: 'Making a design system from scratch',
			publishedDate: 1709579174348,
			tagList: ['Design', 'Pattern'],
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		},
		{
			id: '2',
			title: 'Creating pixel perfect icons in Figma',
			publishedDate: 1709579174348,
			tagList: ['Figma', 'Icon Design'],
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		},
	]

	return (
		<Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
			<Container>
				<Stack
					direction="row"
					mb={2}
					justifyContent={{ xs: 'center', md: 'space-between' }}
					alignItems="center"
				>
					<Typography variant="h6">Recent Posts</Typography>

					<Link passHref href="/blog" legacyBehavior>
						<MuiLink sx={{ display: { xs: 'none', md: 'inline-block' } }}>
							View all
						</MuiLink>
					</Link>
				</Stack>

				<Stack
					spacing={3}
					direction={{ xs: 'column', md: 'row' }}
					sx={{ '& > div': { width: { xs: '100%', md: '50%' } } }}
				>
					{postLists.map((post, index) => (
						<Box key={index}>
							<PostCard data={post}></PostCard>
						</Box>
					))}
				</Stack>
			</Container>
		</Box>
	)
}
