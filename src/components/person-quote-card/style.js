import { Box } from '@mui/material';
import styled from 'styled-components';

export const CardBox = styled(Box)`
	text-align: center;
	padding: 20px;
`;

export const QuoteContainer = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 30px 30px 80px 30px;
	max-width: 100%;
	min-height: 55%; 
	background-color: #EDEEEF;
	flex-direction: column;
`;

export const DescriptionContainer = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding-bottom: 20px;

	width: 100%;
	min-height: 45%; 
	background-color: #E3E4E3;

	img {
		margin-top: -60px;
	}
`;
