import { Typography } from '@mui/material';
import { Container } from './styles';

const Photo = ({ img, title }) => {
	return (
		<Container>
			<img src={img} alt={title} />
			<Typography
				fontWeight='bold'
				style={{ textAlign: 'center', marginTop: '15px' }}
			>
				{title}
			</Typography>
		</Container>
	);
};

export default Photo;
