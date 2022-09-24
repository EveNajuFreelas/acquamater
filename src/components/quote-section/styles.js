import { Box, Divider, Typography } from '@mui/material';
import styled from 'styled-components';

export const BackgroundBox = styled(Box)`
	background-image: url(${props => props.backgroundImg});
	background-size: auto 100%;
	padding: 50px 20%;
	min-height: 310px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 5% 0;
`;

export const QuoteTitle = styled(Typography)`
	color: white;
	padding: 20px 0;
	text-align: center;
`;

export const QuoteDivider = styled(Divider)`
	border-color: #7fc31b;
	width: 80%;
`;

export const QuoteAuthor = styled(Typography)`
	color: white;
	padding: 20px 0;
	display: flex;

	img {
		margin-left: 15px;
		height: 20px;
	}
`;
