import React from 'react';
import {
	ContainerColumn,
	ImageColumn,
	TextColumn,
	ButtonSection,
	TitleContainer,
} from './styles';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../theme/colors';

/**
 * `buttons` prop example:
  [{
     title: 'Saiba mais',
    url: '/saiba-mais',
  }]
 *
 * `image` prop example:
  {
     isBg: Bool,
     img: 'image.png',
  }
 */

const ColumnTextImage = ({
	image,
	title,
	extraImg,
	buttons,
	reverse,
	invertedColors,
	children,
	subtitle,
	paddingText = false,
	noPadding,
	textRight,
}) => {
	const { isBg, img } = image;
	const navigate = useNavigate();

	return (
		<ContainerColumn
			backgroundImage={isBg && img}
			reverse={reverse}
			noPadding={noPadding}
		>
			<ImageColumn>{!isBg && <img src={img} alt='imagem' />}</ImageColumn>
			<TextColumn paddingText={paddingText}>
				<TitleContainer>
					{title && (
						<Typography
							variant='h2'
							color={invertedColors ? 'title.main' : 'primary'}
						>
							{title}
						</Typography>
					)}
					{subtitle && (
						<Typography variant='subtitle' color={colors.grayDark}>
							{title}
						</Typography>
					)}
				</TitleContainer>

				<Typography
					variant='body1'
					color={invertedColors ? 'secondary' : 'text'}
					style={textRight && { textAlign: 'right' }}
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

export default ColumnTextImage;
