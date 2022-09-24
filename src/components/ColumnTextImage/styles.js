import { Grid } from '@mui/material';
import styled from 'styled-components';

export const ContainerColumn = styled((props) => <Grid container {...props}/>)`
	display: flex;
	gap: 60px;
	flex-direction: ${props => props.reverse && 'row-reverse'};
	justify-content: center;
	padding: ${props => (props.noPadding ? '0px' : '50px 0')};
	align-items: center;
	background-image: ${props => `url(${props.backgroundImage})`};
	background-size: cover;
	overflow: hidden;
`;

export const ImageColumn = styled((props) => <Grid item md={5} {...props} />)`
	margin-top: 15px;
	width: ${props => (props.noDivision ? '0%' : '50%')};
	img {
		width: ${props => (props.noDivision ? '0%' : '100%')};
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;

export const TextColumn = styled((props) => <Grid item md={5} {...props} />)`
	width: ${props => (props.noDivision ? '100%' : '50%')};
	padding: ${props => props.paddingText ? '7% 18%' : '0'};

	@media (max-width: 1280px) {
		padding-left: ${props => props.paddingText && '0 5%'};
	}
`;

export const ButtonSection = styled.div`
	margin-top: 20px;
	display: ${props => (props.button ? 'flex' : 'none')};
	flex-direction: column;

	Button {
		margin-top: 15px;
		width: 150px;
		font-size: 15px;
		padding: 10px;
	}
`;
