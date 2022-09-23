import { Typography } from '@mui/material';
import { ContainerTestimony, Section, Text } from './styles';

export const Testimony = ({ author, name, country, role, children }) => (
	<ContainerTestimony>
		<Typography
			color='primary'
			fontWeight='bold'
			style={{ padding: '30px' }}
		>
			{children}
		</Typography>
		<Section>
			<img src={author} />
			<Text>
				<Typography
					color='primary'
					fontWeight='bold'
					style={{ textTransform: 'uppercase' }}
				>
					{name}
				</Typography>
				<Typography
					color='primary'
					fontWeight='bold'
					style={{ fontSize: '16px' }}
				>
					{country}
				</Typography>
				<Typography style={{ fontSize: '14px' }}>{role}</Typography>
			</Text>
		</Section>
	</ContainerTestimony>
);
