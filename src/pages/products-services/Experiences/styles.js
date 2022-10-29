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
		font-size: inherit;
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
  margin: 50px 0px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ListConsultancy = styled.ul`
	padding: 0px 8px;
	margin: 0;
	color: ${colors.primary};
	font-weight: 500;

	li {
		font-size: 16px;
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

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		text-align: center;
	}
`;

export const FirstColumn = styled.div`
	border-right: 1px solid ${colors.blueLighter};
	text-align: right;

	@media (max-width: 768px) {
		padding-right: 0;
		text-align: left;
		margin-bottom: 40px;
	}
`;

export const SecondColumn = styled.div`
	padding-left: 32px;

	img {
		width: 250px;
	}
`;

export const ColumnPhotos = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 30px;
	margin-bottom: 45px;

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 540px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
