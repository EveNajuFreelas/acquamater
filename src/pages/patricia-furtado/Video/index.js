import { Typography } from '@mui/material';
import { ContainerVideo, Section } from './styles';

export const Video = ({ img, title, subtitle }) => (
	<ContainerVideo>
		<img src={img} />
		<Section>
			<Typography
				fontWeight='bold'
				style={{ textTransform: 'uppercase' }}
			>
				{title}
			</Typography>
			{subtitle && (
				<Typography style={{ fontSize: '16px' }}>{subtitle}</Typography>
			)}
		</Section>
	</ContainerVideo>
);
