import { Container } from '@mui/material';
import styled from 'styled-components';

export const ContainerTitle = styled.div`
	display: flex;
	background: no-repeat url(${props => props.image});
	margin-bottom: 24px;
`;

export const Title = styled(Container)`
	display: flex;
	padding: 24px 52px;
	color: #fff;
	font-size: 54px;
	margin-bottom: 24px;
	@media (max-width: 768px) {
		justify-content: center;
	}
`;

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
	font-size: 18px;
`;

export const Description = styled.div`
	max-width: 45%;
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
	background: url(${props => props.image});
	background-size: 100% 100%;
	background-repeat: no-repeat;
	height: 25em;
	z-index: 10;
	padding: 2% 10%;
	margin-bottom: ${props => !props.noMargin && '60px'};

	color: #fff;
	position: relative;
`;
