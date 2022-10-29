import { Container } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';

export const ObjetivosContainer = styled(Box)`
	background-image: url('/acquamater/objetivos-ods-bg.png');
	background-size: 100% 100%;
	padding: 10% 0;
`;

export const LinksContainer = styled((props) => <Container maxW="lg" {...props} />)`
	padding: 30px 0;
	margin-bottom: 30px;
	& a {
		text-decoration: none;
		color: grey;
	}
`;
