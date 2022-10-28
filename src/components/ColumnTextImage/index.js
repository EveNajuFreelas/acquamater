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
	noPadding,
	textRight,
	noDivision,
	personalize,
	personalizeReverse,
	subfooter,
	lowercase,
	widthText,
}) => {
	const { isBg, img } = image;
	const navigate = useNavigate();
	const handleNavigate = url => {
		const regex = /[(http)(https)]:\/\//;

		if (regex.test(url)) {
			window.open(url);
		} else {
			navigate(url);
		}
	};

	return (
		<ContainerColumn
			backgroundImage={isBg && img}
			reverse={reverse}
			noPadding={noPadding}
			personalize={personalize}
		>
			<ImageColumn noDivision={noDivision} subfooter={subfooter}>
				{!isBg && <img src={img} alt='imagem' />}
			</ImageColumn>
			<TextColumn
				sx={{ paddingTop: '25em' }}
				noDivision={noDivision}
				personalize={personalize}
				personalizeReverse={personalizeReverse}
			>
				<TitleContainer>
					{title && (
						<Typography
							variant={lowercase ? 'h3' : 'h1'}
							color={invertedColors ? 'white' : 'primary'}
							style={{
								textTransform: lowercase
									? 'capitalize'
									: 'uppercase',
							}}
							fontWeight='bold'
						>
							{title}
						</Typography>
					)}
					{subtitle && (
						<Typography
							variant='subtitle'
							color={colors.grayDark}
							style={{ width: '100%' }}
						>
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
