import { useMediaQuery } from '@mui/material';
import { Themes, Wave } from './styles';
const BoxGray = ({ dense, children, waterMark, white, center }) => {
	const isDesktop = useMediaQuery('(min-width:600px)', { noSsr: true });

	return (
		<Themes
			dense={dense}
			white={white}
			isDesktop={isDesktop}
			center={center}
		>
			{children}
			{waterMark && (
				<Wave>
					<img src='/acquamater/wave.png' alt='wave' />
				</Wave>
			)}
		</Themes>
	);
};

export default BoxGray;
