import { Container, Typography } from '@mui/material';
import styled from 'styled-components';
import { colors } from '../../../theme/colors';

export const ContainerTitle = styled.div`
	display: flex;
	background: #00376d;
	margin-bottom: 24px;
`;

export const Title = styled(Container)`
	display: flex;
	padding: 24px 52px;
	color: #fff;
	font-size: 56px;
	margin-bottom: 24px;
`;

export const TitleThemesBox = styled(Typography)`
	letter-spacing: 2px;
	font-weight: bold;
	line-height: 35px;
	text-align: center;
	font-size: 22px;
`;

export const List = styled.ul`
	padding: 0px 8px;
	list-style-type: '- ';
	margin: 0;

	li {
		font-size: inherit;
		line-height: 30px;
	}
`;

export const TitleThemesBlue = styled(Typography)`
	color: ${colors.lightBlue};
	font-weight: bold;
	font-size: 18px;
	text-transform: uppercase;
`;

export const ContainerThemes = styled.div`
	display: flex;
	width: 100%;
	gap: 30px;
`;

export const Link = styled.a`
	color: ${colors.lightGreen};
	text-decoration: underline;
	margin-top: 20px;
`;
