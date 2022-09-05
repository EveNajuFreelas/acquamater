import styled from 'styled-components';

export const ContainerColumn = styled.div`
	display: flex;
	gap: 60px;
	flex-direction: ${props => props.reverse && 'row-reverse'};
	justify-content: center;
	padding: ${props => (props.noPadding ? '0px' : '50px 0')};
	align-items: center;
	background-image: ${props => `url(${props.backgroundImage})`};
	background-size: cover;
`;

export const ImageColumn = styled.div`
	margin-top: 15px;
	width: 50%;
	img {
		width: 100%;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;

export const TextColumn = styled.div`
	width: 50%;
	gap: 20px;
	padding-left: ${props => props.paddingText && '20%'};

	@media (max-width: 1280px) {
		padding-left: ${props => props.paddingText && '5%'};
	}
`;

export const ButtonSection = styled.div`
	margin-top: 40px;
	display: flex;
	flex-direction: column;

	Button {
		margin-top: 15px;
		width: 150px;
		font-size: 15px;
		padding: 10px;
	}
`;
