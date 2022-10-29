import { Box } from '@mui/material';
import styled from 'styled-components';

export const BoxContainer = styled(Box)`
	position: relative;
	width: 320px;
	text-align: start;
	padding-bottom: 50px;
	min-height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: 'space-between';

	@media (max-width: 768px) {
		max-width: 100%;
	}
`;

export const OtherStyle = styled(Box)``;
