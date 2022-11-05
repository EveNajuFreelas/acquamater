import { Box, Container } from '@mui/material';
import styled from 'styled-components';

export const IntroContainer = styled(Container)`
	margin-bottom: 10px;
	text-align: center;
`;

export const PeopleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const PilaresContainer = styled(Container)`
	text-align: center;
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const GraphContainer = styled.div`
	background-image: url('/acquamater/como-atuamos-graph.png');
	background-size: 80% 80%;
	background-repeat: no-repeat;
	background-position: center center;
	width: 500px;
	height: 500px;

	margin-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const TooltipContainer = styled.div`
	width: ${props => props.w || '430px'};
	padding-left: ${props => props.pl ?? 0};
	justify-content: space-between;
	margin-top: ${props => props.mt};
	display: flex;
`;

export const SubfooterContainer = styled.div`
	background-image: url('/acquamater/como-atuamos-subfooter.png');
	background-size: 100% 100%;
	height: 430px;
	width: 100%;
	overflow: hidden;
	display: flex;
	align-items: center;
	padding: 337px 0 0;
`;

export const BoxComoAtuamos = styled(Box)`
	display: inline-flex;
	flex-direction: column;
	margin: auto;
	margin-bottom: 60px;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 10% 0;
	text-align: center;

	@media (max-width: 1280px) {
		margin-bottom: 0px;
	}
`;
