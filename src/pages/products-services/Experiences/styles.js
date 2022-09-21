import { Container, Typography } from '@mui/material';
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

export const ContainerColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Column = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 60px;
	margin: 50px 0px 200px;
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

export const ContainerColumns = styled.div`
	display: grid;
	grid-template-columns: 1fr 3.5fr;
`;

export const FirstColumn = styled.div`
	padding-right: 20px;
	text-align: right;
`;

export const SecondColumn = styled.div`
	padding-left: 32px;
	border-left: 1px solid ${colors.blueLighter};
`;

export const ColumnPhotos = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 30px;
	margin-bottom: 45px;
`;
