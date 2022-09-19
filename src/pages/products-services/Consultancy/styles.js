import { Container, Typography } from '@mui/material';
import styled from 'styled-components';
import { colors } from '../../../theme/colors';

export const ContainerTitle = styled.div`
	display: flex;
	background: ${props =>
		props.lighter ? colors.anotherGreen : colors.primary};
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

export const ContainerColumn2 = styled.div`
	display: flex;
	gap: 60px;
	margin: 120px 0px;

	img {
		width: 50%;
	}
	div {
		width: 40%;
	}
`;

export const ListConsultancy = styled.ul`
	padding: 0px 8px;
	margin: 0;
	color: ${colors.primary};
	font-weight: 500;

	li {
		font-size: 18px;
		line-height: 30px;

		span {
			color: ${colors.grayDark};
		}
	}
`;

export const ContainerList = styled.div`
	display: grid;
	grid-template-columns: 1fr 2.5fr;
`;

export const FirstColumn = styled.div`
	padding-right: 16px;
	text-align: right;
`;

export const SecondColumn = styled.div`
	padding-left: 32px;
	border-left: 1px solid ${colors.blueLighter};
`;
