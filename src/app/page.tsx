import { HeroSection, RecentSection } from '@/components/home'
import { SupportSEO } from '@/components/seo/seo'
import Box from '@mui/material/Box'

export const metadata = {
	title: 'My NextJs App With MUI',
	description: 'My NextJs App With MUI',
};

export default function Home() {
	return (
		<Box>
			<SupportSEO
				data={{
					title: 'My NextJs App With MUI',
					description: 'My NextJs App With MUI',
					thumbnailUrl: 'https://kanbox.vn/wp-content/uploads/2023/02/nextjs-cover.jpg',
					url: 'https://www.facebook.com/d.rmaa7',
				}}
			/>
			<HeroSection />
			<RecentSection />
		</Box>
	)
}
