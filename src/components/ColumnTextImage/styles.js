import styled from 'styled-components';

export const ContainerColumn = styled.div`
	display: flex;
	gap: 60px;
	flex-direction: ${props => props.reverse && 'row-reverse'};
	justify-content: space-between;
	padding: ${props => (props.noPadding ? '0px' : '50px 0')};
	align-items: center;
	background-image: url(${props => props.backgroundImage});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	overflow: hidden;
	
    width: 100%;
    height: 100%;

	@media (max-width: 768px) {
		flex-direction: column;
	} ;
`;

export const ImageColumn = styled.div`
	margin-top: 15px;
	width: ${props => (props.noDivision ? '0%' : '50%')};
	height: auto;
	display: ${props => props.subfooter && 'flex'};
	justify-content: ${props => props.subfooter && 'flex-end'};

	img {
		width: ${props => (props.noDivision ? '0%' : '100%')};
		width: ${props => props.subfooter && '50%'};
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
	padding-left: ${props => props.personalize && '300px'};
	padding-right: ${props => props.personalizeReverse && '300px'};

	@media (max-width: 1280px) {
		padding-left: ${props => props.personalize && '30px'};
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
