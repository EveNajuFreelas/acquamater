import { Typography } from '@mui/material';
import {
	StripContainer,
	WrapperStrip,
	StripImg,
	TextImg,
	Text,
} from './styles';

export const Strip = ({ textBall, img, color, imgBG }) => (
	<StripContainer img={imgBG}>
		<WrapperStrip maxWidth='md'>
			<StripImg>
				<img src={img} alt="img" />
				<TextImg>{textBall}</TextImg>
			</StripImg>
			<Text>
				<Typography
					variant='h2'
					color='#fff'
					align='left'
					fontWeight='normal'
				>
					Conte-nos um pouco mais e encontramos a solução para você!
				</Typography>
			</Text>
		</WrapperStrip>
	</StripContainer>
);
