import { Breadcrumbs } from '@mui/material';
import styled from 'styled-components';

export const HeadBreadcrumbs = styled(Breadcrumbs)`
	color: white;
	padding-top: 40px;
`;

export const HeadContainer = styled.div`
	position: relative;
	height: ${props => (props.marginBottom ? props.marginBottom : '50vh')};
	z-index: 10;
	color: white;
	margin-bottom: 10%;

	@media (max-width: 1280px) {
		height: 42vh;
	}

	@media (max-width: 1024px) {
		height: 40vh;
	}

	@media (max-width: 880px) {
		height: 28vh;
	}
`;
