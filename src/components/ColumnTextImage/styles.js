import styled from 'styled-components';

export const ContainerColumn = styled.div`
	display: flex;
	gap: 60px;
	flex-direction: ${props => props.reverse && 'row-reverse'};
	justify-content: space-between;
	padding: ${props => (props.noPadding ? '0px' : '50px 0')};
	align-items: center;
	background-image: ${props => `url(${props.backgroundImage})`};
	background-size: cover;
	overflow: hidden;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const ImageColumn = styled.div`
	margin-top: 15px;
	width: ${props => (props.noDivision ? '0%' : '50%')};

	img {
		width: ${props => (props.noDivision ? '0%' : '100%')};
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;

export const TextColumn = styled.div`
	width: ${props => (props.noDivision ? '100%' : '50%')};
	padding: 0;

	@media (max-width: 1280px) {
		padding-left: 0;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const ButtonSection = styled.div`
	margin-top: 20px;
	display: ${props => (props.button ? 'flex' : 'none')};
	flex-direction: column;

	Button {
		margin-top: 15px;
		width: 150px;
		font-size: 15px;
		padding: 10px;
	}
`;
