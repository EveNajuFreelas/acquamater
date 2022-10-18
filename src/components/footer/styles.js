import { Divider, Grid } from '@mui/material';
import styled from 'styled-components';

const FooterContainer = styled.div`
	background-image: url('/acquamater/footer-bg.svg');
	display: flex;
	justify-content: center;
`;

const ContainerFooter = styled(props => <Grid {...props} />)`
	max-width: 1024px;
	display: flex;
	bottom: 0;
	margin: 0;

	min-height: 200px;
	justify-content: center;
	padding: 20px 0px;
`;

const SectionTitle = styled('p')`
	color: #cce70b;
`;

const SectionChild = styled('p')`
	color: #999;
	font-size: 12px;
	cursor: pointer;
`;

const SectionDivider = styled(Divider)`
	border-color: #999;
	width: 100%;
	margin: 20px 0;
`;

export {
	FooterContainer,
	SectionTitle,
	SectionChild,
	SectionDivider,
	ContainerFooter,
};
