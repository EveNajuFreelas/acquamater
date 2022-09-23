import styled from 'styled-components';

export const ContainerTestimony = styled.div`
	background-color: rgb(237, 240, 240, 0.5);
	display: flex;
	flex-direction: column;
	width: 350px;
	text-align: center;
	justify-content: space-between;
`;

export const Text = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
`;

export const Section = styled.div`
	background-color: rgb(237, 240, 240);
	position: relative;
	height: 130px;
	margin: 70px 0 0;
	padding: 30px;
	display: flex;
	justify-content: center;

	img {
		position: absolute;
		bottom: 150px;
		width: 100px;
	}
`;
