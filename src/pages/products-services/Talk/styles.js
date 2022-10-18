import { Typography } from '@mui/material';
import styled from 'styled-components';
import { colors } from '../../../theme/colors';

export const TitleThemesBox = styled(Typography)`
	letter-spacing: 2px;
	font-weight: bold;
	line-height: 35px;
	text-align: center;
	font-size: 20px;
`;

export const List = styled.ul`
	padding: 0px 8px;
	list-style-type: '- ';
	margin: 0;

	li {
		font-size: 16px;
		line-height: 30px;
	}
`;

export const TitleThemesBlue = styled(Typography)`
	color: ${colors.lightBlue};
	font-weight: bold;
	font-size: 16px;
	text-transform: uppercase;
`;

export const ContainerThemes = styled.div`
	display: flex;
	width: 100%;
	gap: 30px;
`;
