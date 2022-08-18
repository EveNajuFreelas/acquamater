import React, { Children } from 'react';
import {
	ContainerColumn,
	ImageColumn,
	TextColumn,
	ContentText,
	TitleText,
} from './styles';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const ColumnTextImage = ({
	image,
	children,
	title,
	button,
	reverse,
	pathName,
}) => {
	let navigate = useNavigate();

	const routeChange = () => {
		navigate(pathName);
	};

	return (
		<ContainerColumn reverse={reverse}>
			<ImageColumn>
				<img alt='people_circle' src={image} />
			</ImageColumn>
			<TextColumn>
				<TitleText variant='h2' color='primary'>
					{title}
				</TitleText>
				<ContentText variant='body1' sx={{ color: 'text.main' }}>
					{children}
				</ContentText>
				{button && (
					<Button
						startIcon={<AddIcon />}
						onClick={() => routeChange()}
					>
						Saiba Mais
					</Button>
				)}
			</TextColumn>
		</ContainerColumn>
	);
};

export default ColumnTextImage;
