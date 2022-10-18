import { Typography } from '@mui/material';
import { ContainerPodcast, Section } from './styles';

export const Podcast = ({ img, title, subtitle, participation }) => (
	<ContainerPodcast>
		<img src={img} alt='img' />
		<Section>
			<Typography
				fontWeight='bold'
				style={{ textTransform: 'uppercase' }}
			>
				{title}
			</Typography>
			{subtitle && (
				<Typography style={{ fontSize: '14px' }}>{subtitle}</Typography>
			)}
			{participation && (
				<Typography style={{ fontSize: '14px' }}>
					{participation}
				</Typography>
			)}
		</Section>
	</ContainerPodcast>
);
