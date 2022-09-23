import { Container, Tooltip, Typography } from '@mui/material';
import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const Head = styled.div`
	background: no-repeat url('/patricia-head.png');
	position: relative;
	display: flex;
	height: 70vh;
`;

export const WrapperHead = styled.div`
	height: 30vh;

	@media (max-width: 1280px) {
		height: 50vh;
	}
`;

export const ContainerHead = styled.div`
	position: absolute;
	top: 400px;
	display: flex;
	img {
		margin-left: 10vw;
	}

	@media (max-width: 1280px) {
		img {
			margin-left: 0;
		}
	}
`;

export const Text = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 100%;
	height: 500px;
	margin-left: 50px;
`;

export const ContainerBio = styled(Container)``;
export const WrapperSecond = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	margin-top: 20px;
`;

export const WrapperTestimony = styled.div`
	margin-top: 50px;
	justify-content: center;
	display: flex;
	gap: 60px;
`;

export const VideoSection = styled.div`
	display: flex;
	background: no-repeat url('/patricia-second.png');
	text-align: center;
	flex-direction: column;
	padding: 170px 0px 200px;
	margin: 40px 0;
`;

export const Videos = styled(Container)`
	display: grid;
	grid-template-columns: repeat(3, 350px);
	gap: 50px;
	justify-content: center;
`;

export const PodcastSection = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 40px;
`;

export const Podcasts = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const PerformerSection = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 40px;
	margin-top: 80px;
	gap: 30px;
`;

export const Performers = styled(Container)`
	display: flex;
	justify-content: center;
	gap: 20px;

	img {
		height: 350px;
	}
`;
