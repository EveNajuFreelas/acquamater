import { Container, Typography } from '@mui/material';
import styled from 'styled-components';

export const ContainerText = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 70px;
`;

export const ContainerTextSingle = styled(Container)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 20px;
`;

export const Description = styled.div`
	max-width: 35%;
	text-align: end;
`;

export const ContainerProducts = styled.div`
	& > *:nth-child(2n) {
		background-color: #f0f0f0;
	}
`;

export const ContainerProduct = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const HeadPage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 10%;
	padding-bottom: 10%;
	background: url(${props => props.image});
	background-size: cover;
	background-blend-mode: multiply;

	color: #fff;
	position: relative;
`;
