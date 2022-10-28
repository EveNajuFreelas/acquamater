import { Container } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled(Container)`
	display: flex;
	align-items: center;
	flex-direction: column;
	max-width: 1280px;
	position: relative;
`;

export const BackgroundImage = styled.img`
	position: absolute;
	z-index: -1;
	height: auto;
	width: 100%;
`;
