import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { colors } from '../../../theme/colors';

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

export const ContainerColumn2 = styled.div`
	display: flex;
	flex-direction: row-reverse;
	gap: 60px;
	margin: 120px 0px;
	justify-content: space-between;

	div {
		width: 45%;
	}
`;

export const WrapperContainer = styled.div`
	position: relative;
`;

export const ContainerImage = styled.div`
	position: absolute;
	top: 70px;
`;

export const BlueBusinessHubContainer = styled(Box)`
	background-image: url('/acquamater/training-second-bg.png');
	padding: 10% 10%;
	background-size: 100% 100%;
	background-repeat: no-repeat;
`;
