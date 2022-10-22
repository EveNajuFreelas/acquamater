import { Breadcrumbs } from '@mui/material';
import styled from 'styled-components';

export const HeadBreadcrumbs = styled(Breadcrumbs)`
	color: white;
	padding-top: 40px;
`;

export const HeadContainer = styled.div`
	position: relative;
	background-image: ${props => props.bgImg && `url(${props.bgImg})`};
	background-size: 100%;
	background-repeat: no-repeat;
	background-position: bottom;
	height: 30%;
	z-index: 10;
	padding: 5% 20%;
	color: white;
`;
