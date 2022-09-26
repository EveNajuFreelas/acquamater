import { Container, Typography } from '@mui/material';
import styled from 'styled-components';

export const StripContainer = styled.div`
	position: relative;
	height: 150px;
	background-image: url(${props => props.img});
	display: flex;
	margin: 70px 0px;
`;

export const WrapperStrip = styled(Container)``;

export const StripImg = styled.div`
	position: absolute;
	top: -24px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	img {
		width: 200px;
		height: auto;
	}
`;

export const Text = styled.div`
	padding-left: 300px;
	text-align: end;
	width: 50%;

	@media (max-width: 768px) {
		padding-left: 300px;
	}
`;

export const TextImg = styled(Typography)`
	position: absolute;
	color: #fff;
	width: 66%;
`;
