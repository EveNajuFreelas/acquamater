import styled from 'styled-components';

export const ContainerColumn = styled.div`
	display: flex;
	gap: 120px;
	flex-direction: ${props => props.reverse && 'row-reverse'};
	max-width: 80%;
	align-items: center;
	margin: 50px 0px;
`;

export const ImageColumn = styled.div`
	max-width: 30vw;
	img {
		width: 100%;
	}
`;
export const TextColumn = styled.div`
	max-width: 45%;
	display: flex;
	flex-direction: column;
	gap: 20px;

	Button {
		width: 150px;
		font-size: 15px;
		padding: 10px;
		border-radius: 50px;
	}
`;
