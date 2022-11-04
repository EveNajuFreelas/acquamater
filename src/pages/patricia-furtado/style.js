import { Container, Grid } from '@mui/material';
import styled from 'styled-components';

export const Head = styled.div`
	background: no-repeat url('/acquamater/patricia-head.png');
	position: relative;
	display: flex;
	height: 70vh;
`;

export const WrapperHead = styled.div`
	position: relative;
	height: 25vh;
	z-index: 12;

	@media (max-width: 1280px) {
		height: 22vh;
	}

	@media (max-width: 1024px) {
		height: 10vh;
	}

	@media (max-width: 880px) {
		height: 5vh;
	}
`;

export const ContainerHead = styled(props => <Grid container {...props} />)`
	transform: translateY(-70%);
	height: auto;
	justify-content: center;
`;

export const IMGPatricia = styled.img`
	margin-left: 7vw;

	@media (max-width: 1280px) {
		margin-left: 3vw;
	}

	@media (max-width: 1024px) {
		margin-left: 1vw;
	}

	@media (max-width: 880px) {
		width: 70%;
		margin-left: 15vw;
		margin-top: -105px;
	}
`;

export const Text = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 100%;
	margin-top: 370px;
	margin-left: 160px;
	gap: 10px;

	@media (max-width: 1280px) {
		margin-top: 225px;
		margin-left: 60px;
	}

	@media (max-width: 1024px) {
		margin-top: 170px;
		margin-left: 30px;
	}

	@media (max-width: 880px) {
		margin-top: 10px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
`;

export const ContainerBio = styled(Container)`
	@media (max-width: 1024px) {
		display: flex;
		margin-top: 7vw;
		flex-direction: column;
		align-items: center;
	}

	@media (max-width: 880px) {
		margin-top: 18vw;
	}
`;

export const WrapperSecond = styled.div`
	display: grid;
	grid-template-columns: 0.65fr 1fr;

	margin-top: 20px;

	@media (max-width: 880px) {
		grid-template-columns: 1fr 1fr;
	}
`;

export const WrapperTestimony = styled.div`
	margin-top: 50px;
	justify-content: center;
	display: flex;
	gap: 60px;
`;

export const VideoSection = styled.div`
	display: flex;
	background: no-repeat url('/acquamater/patricia-second.png');
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

	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 350px);
	}

	@media (max-width: 880px) {
		grid-template-columns: repeat(1, 350px);
	}
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
		min-height: 350px;
	}

	@media (max-width: 880px) {
		flex-direction: column;
	}
`;
