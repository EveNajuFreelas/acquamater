import { Box } from '@mui/material';
import styled from 'styled-components';

export const BoxContainer = styled(Box)`
	max-width: 320px;
	text-align: start;

	@media (max-width: 768px) {
		max-width: 100%;
	}
`;

export const OtherStyle = styled(Box)``;
