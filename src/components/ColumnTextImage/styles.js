import { Typography } from '@mui/material';
import styled from 'styled-components';

export const ContainerColumn = styled.div`
	display: flex;
	gap: 60px;
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

	button {
		width: 150px;
		font-size: 15px;
		padding: 10px;
		border-radius: 50px;
	}
`;

export const TitleText = styled(Typography)`
	font-size: 32px;
	font-weight: bold;
	letter-spacing: 3px;
	text-transform: uppercase;
`;

export const ContentText = styled(Typography)`
	line-height: 35px;
	letter-spacing: 2px;
	font-weight: lighter;
`;
