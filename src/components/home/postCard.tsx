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

				<Typography variant="body1" sx={{ display: 'flex' }} pt={1} pb={1}>
					{format(data.publishedDate, 'dd MMM yyyy')}
					<Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
					{data.tagList.join(', ')}
				</Typography>

				<Typography variant="body2">{data.description}</Typography>
			</CardContent>
		</Card>
	)
}
