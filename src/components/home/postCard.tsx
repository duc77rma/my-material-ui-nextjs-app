import { Post } from '@/models'
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material'
import * as React from 'react'
import { format } from 'date-fns'

export interface IPostCardProps {
	data: Post
}

export function PostCard({ data }: IPostCardProps) {
	if (!data) {
		return null
	}

	return (
		<Card>
			<CardContent>
				<Typography variant="h5" fontWeight="bold">
					{data.title}
				</Typography>

				<Stack flexDirection="row" my={2}>
					<Typography variant="body1" pt={1} pb={1}>
						{format(data.publishedDate, 'dd MMM yyyy')}
					</Typography>

					<Divider orientation="vertical" sx={{ mx: 2 }} flexItem />

					<Typography variant="body1" pt={1} pb={1}>
						{data.tagList.join(', ')}
					</Typography>
				</Stack>

				<Typography variant="body2">{data.description}</Typography>
			</CardContent>
		</Card>
	)
}
