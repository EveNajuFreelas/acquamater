import { Box } from '@mui/material';
import styled from 'styled-components';

export const MundoContainer = styled(Box)`
	background-image: url('/acquamater/unesco-subfooter-bg.png');
	background-size: 100% 100%;
	text-align: center;
	padding: 50px 10%;

	@media (max-width: 1024px) {
		padding: 0;
	}
`;
