import { Container, Grid } from '@mui/material';
import styled from 'styled-components';

export const Head = styled.div`
	background: no-repeat url('/acquamater/patricia-head.png');
	position: relative;
	display: flex;
	height: 70vh;
`;

export const WrapperHead = styled.div`
	height: 30vw;

	@media(max-width: 880px) {
		height: 50vw;
	}
`;

export const ContainerHead = styled((props) => <Grid container {...props} />)`
	position: absolute;
	top: 400px;
	display: flex;
	height: auto;
	img {
		margin-left: 10vw;
	}

	@media (max-width: 880px) {
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

	@media (max-width: 880px) {
		height: auto;
		margin-left: 0;
	}
`;

export const ContainerBio = styled(Container)`
	@media (max-width: 880px) {
		margin-top: 10vw;
	}
`;
export const WrapperSecond = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	margin-top: 20px;
`;

export const WrapperTestimony = styled((props) => (<Grid container spacing={2} {...props} />))`
	margin-top: 50px;
	justify-content: center;
	display: flex;
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
