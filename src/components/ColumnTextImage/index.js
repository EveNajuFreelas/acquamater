import React from 'react';
import {
	ContainerColumn,
	ImageColumn,
	TextColumn,
	ButtonSection,
} from './styles';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const ColumnTextImage = ({
	image,
	content,
	title,
	extraImg,
	buttons,
	reverse,
	invertedColors,
	children,
}) => {
	const { isBg, img } = image;
	const navigate = useNavigate();

	return (
		<ContainerColumn backgroundImage={isBg && img} reverse={reverse}>
			<ImageColumn>
				{!isBg && <img alt='people_circle' src={img} />}
			</ImageColumn>
			<TextColumn>
				{title && (
					<Typography
						variant='h2'
						color={invertedColors ? 'title.main' : 'primary'}
						sx={{ marginBottom: '20px' }}
					>
						{title}
					</Typography>
				)}
				<Typography
					variant='body1'
					color={invertedColors ? 'secondary' : 'text'}
				>
					{children}
				</Typography>
				{extraImg && (
					<img
						src={extraImg}
						alt='imagem'
						style={{ marginTop: '15px', width: '350px' }}
					/>
				)}
				<ButtonSection>
					{buttons?.map(({ title, url }, index) => (
						<Button
							key={index}
							onClick={() => navigate(url)}
							style={{ width: 'fit-content' }}
							color={invertedColors ? 'secondary' : 'primary'}
						>
							<AddIcon />
							{title}
						</Button>
					))}
				</ButtonSection>
			</TextColumn>
		</ContainerColumn>
	);
};

/**
 * `buttons` prop example:
 * [{
 *    title: 'Saiba mais',
 *    url: '/saiba-mais',
 * }]
 *
 * `image` prop example:
 * {
 *    isBg: Bool,
 *    img: 'image.png',
 * }
 */

export default ColumnTextImage;
