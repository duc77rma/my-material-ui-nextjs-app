import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export default function WorksPage() {
	return (
		<Container maxWidth="lg">
			<Box
				sx={{
					my: 4,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				Works Page
			</Box>
		</Container>
	)
}
