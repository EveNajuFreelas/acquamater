import styled from 'styled-components';
import { colors } from '../../../theme/colors';

export const ContainerPodcast = styled.div`
	display: flex;
	gap: 20px;
	background: ${colors.lightGray};
	padding: 20px;

	img {
		width: 150px;
	}
`;

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
`;
