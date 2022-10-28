import { Box } from '@mui/material';
import styled from 'styled-components';

export const ContainerSection = styled.div`
	padding-left: 300px;

	@media (max-width: 1280px) {
		padding-left: 30px;
	}
`;

export const BoxContainer = styled(Box)`
	position: relative;
	max-height: 100vh;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 10% 0;
`;

export const BackgroundImage = styled.img`
	position: absolute;
	z-index: -1;
	height: auto;
	width: 100%;
`;
