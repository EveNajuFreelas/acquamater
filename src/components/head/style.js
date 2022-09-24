import { Breadcrumbs } from '@mui/material';
import styled from 'styled-components';

export const HeadBreadcrumbs = styled(Breadcrumbs)`
	color: white;
	padding-top: 40px;
`;

export const HeadContainer = styled.div`
	position: relative;
	background-image: ${props => props.bgImg && `url(${props.bgImg})`};
	background-size: auto 100%;
	background-repeat: no-repeat;
	height: 23em;
	z-index: 10;
	padding: 2% 20%;
	margin-bottom: -60px;
	color: white;
`;
