import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const Themes = styled.div`
	background: ${colors.gray};
	padding: ${props => (props.dense ? '60px 90px' : '60px 120px')};
	display: flex;
	flex-direction: column;
	gap: 30px;
	margin-bottom: 30px;
	color: ${colors.grayDark};
	position: relative;
	overflow: hidden;
`;

export const Wave = styled.div`
	position: absolute;
	top: 20px;
	right: -329px;
	left: 524px;
`;
