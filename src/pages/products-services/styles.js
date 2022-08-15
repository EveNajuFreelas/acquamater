import { Container, Typography } from '@mui/material';
import styled from 'styled-components';

export const ContainerText = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 70px;
`;

export const Title = styled(Typography)``;

export const Description = styled.div`
	max-width: 30%;
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
`;

export const HeadPage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 10%;
	padding-bottom: 15%;
	background: url('http://www.patobragado.pr.gov.br/uploads/article/2021-02/saude-promove-palestras-de-prevencao-a-covid-19-na-escola-municipal-d7f2c94b32.jpg')
		rgba(0, 42, 194, 0.8);
	background-size: cover;
	background-blend-mode: multiply;

	color: #fff;
	position: relative;

	clip-path: url('wave.svg#wave');
`;
