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
     img: '/acquamater/image.png',
  }
 */

const ColumnTextImage = ({
	image,
	title,
	buttons,
	reverse = false,
	invertedColors,
	children,
	subtitle,
	paddingText = false,
	noPadding,
	textRight,
	variant,
	upperCase,
	extraImg,
	noDivision,
}) => {
	const { isBg, img } = image;
	const navigate = useNavigate();

	const handleNavigate = (url) => {
		const regex = /[(http)(https)]:\/\//;

		if(regex.test(url)) {
			window.open(url);
		} else {
			navigate(url);	
		}
	}

	return (
		<ContainerColumn
			backgroundImage={isBg && img}
			reverse={reverse}
			noPadding={noPadding}
		>
			<ImageColumn noDivision={noDivision}>
				{!isBg && <img src={img} alt='imagem' />}
			</ImageColumn>
			<TextColumn
				paddingText={paddingText}
				sx={{ paddingTop: '25em' }}
				noDivision={noDivision}
			>
				<TitleContainer>
					{title && (
						<Typography
							variant='h1'
							color={invertedColors ? 'white' : 'primary'}
							style={{ textTransform: 'uppercase' }}
						>
							{title}
						</Typography>
					)}
					{subtitle && (
						<Typography variant='subtitle' color={colors.grayDark}>
							{subtitle}
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
				<ButtonSection button>
					{buttons?.map(({ title, url }, index) => (
						<Button
							key={index}
							onClick={() => handleNavigate(url)}
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
