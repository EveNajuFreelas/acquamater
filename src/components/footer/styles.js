import { Divider, Grid } from '@mui/material';
import styled from 'styled-components';

const FooterContainer = styled(props => <Grid {...props} />)`
	bottom: 0;
	display: flex;
	min-height: 200px;
	justify-content: center;
	padding: 20px 110px;
	background-image: url('/acquamater/footer-bg.svg');
	margin: 0;
	width: 100%;
`;

const SectionTitle = styled('p')`
	color: #cce70b;
`;

const SectionChild = styled('p')`
	color: #999;
	font-size: 14px;
	cursor: pointer;
`;

const SectionDivider = styled(Divider)`
	border-color: #999;
	width: 100%;
	margin: 20px 0;
`;

export { FooterContainer, SectionTitle, SectionChild, SectionDivider };
