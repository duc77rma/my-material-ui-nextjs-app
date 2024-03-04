import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/legacy/image'
import * as React from 'react'
import avatar from '@/assets/images/avatar.jpg'

export interface IAppProps {}

export const HeroSection = (props: IAppProps) => {
	const buttonStyle = { borderRadius: '50%', boxShadow: '-5px 10px', color: '#EDF7FA' }

	return (
		<Box component="section" pt={18} pb={9} pl={1} pr={1}>
			<Container>
				<Stack
					spacing={8}
					direction={{ xs: 'column', md: 'row' }}
					alignItems={{ xs: 'center', md: 'flex-start' }}
					textAlign={{ xs: 'center', md: 'left' }}
				>
					<Box>
						<Typography component="h1" variant="h3" fontWeight="bold" mb={5}>
							Hi, I am John, <br /> Creative Technologist
						</Typography>

						<Typography mb={5}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
							sint. Velit officia consequat duis enim velit mollit. Exercitation
							veniam consequat sunt nostrud amet.
						</Typography>

						<Button variant="contained" size="large">
							Download Resume
						</Button>
					</Box>

					<Box
						sx={{
							minWidth: '200px',
						}}
					>
						<Image src={avatar} alt="avatar" layout="responsive" style={buttonStyle} />
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}
