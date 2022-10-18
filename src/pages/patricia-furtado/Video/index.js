import { Typography } from '@mui/material';
import { ContainerVideo, Section } from './styles';

export const Video = ({ img, title, subtitle }) => (
	<ContainerVideo>
		<img src={img} alt="videop" />
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
		</Section>
	</ContainerVideo>
);
