import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const Themes = styled.div`
	background: ${props => (props.white ? '#fff' : colors.gray)};
	padding: ${({ dense, isDesktop }) => {
		if (dense && isDesktop) {
			return '60px 90px';
		} else if (dense && !isDesktop) {
			return '50px';
		} else {
			return '60px 120px';
		}
	}};
	display: flex;
	flex-direction: column;
	gap: 30px;
	margin-bottom: 30px;
	color: ${colors.grayDark};
	position: relative;
	overflow: hidden;
	height: 70%;
	text-align: ${props => props.center && 'center'};

	@media (max-width: 768px) {
		height: auto;
		padding: 30px;
	}

	@media (max-width: 540px) {
		padding: 40px;
	}
`;

export const Wave = styled.div`
	position: absolute;
	top: 20px;
	right: -329px;
	left: 524px;
`;
