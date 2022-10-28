import { Add, Close } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { colors } from '../../theme/colors';
import { CardBox, QuoteContainer, DescriptionContainer } from './style';

export const PersonQuoteCard = ({
	quote,
	personImg,
	name,
	description,
	extraContent,
	horizontal,
	seeMoreButton,
	isTextExpanded,
}) => {
	const style = {
		width: horizontal ? '700px' : '350px',
		minHeight: horizontal ? '300px' : '500px',
		display: horizontal ? 'flex' : 'block',
		margin: horizontal ? 'auto' : '50px 20px',
	}

	const quoteStyle = {
		padding: horizontal ? '30px' : '30px 30px 80px 30px',
	};

	const descriptionStyle = {
		img: {
			marginBottom: horizontal ? 0 : '-60px',
		},
		padding: horizontal ? '20px' : '0 0 20px 0',
	};

	return (
		<CardBox sx={style}>
			<QuoteContainer style={quoteStyle}>
				<Typography variant='body1bold' color={colors.blueLighter} pb={horizontal ? 0 : '10px'}>
					{quote}
				</Typography>
				{seeMoreButton && (
					<Button
						onClick={seeMoreButton}
						variant='outlined'
						sx={{ padding: 0, minWidth: 0 }}
					>
						{isTextExpanded ? <Close /> : <Add />}
					</Button>
				)}
			</QuoteContainer>
			<DescriptionContainer style={descriptionStyle}>
				<img width='145px' src={personImg} alt={name} style={descriptionStyle.img} />
			 		<Typography
			 			variant='body1'
			 			color={colors.blueLighter}
			 			style={{ marginTop: '10px', padding: '10px' }}
			 		>
			 			{name}
			 		</Typography>
			 		{extraContent && extraContent}
			 		<Typography variant='body1' style={{ padding: '10px'}}>{description}</Typography>
			</DescriptionContainer>
		</CardBox>
	);
};
