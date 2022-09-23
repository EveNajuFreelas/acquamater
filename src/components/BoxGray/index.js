import { Themes, Wave } from './styles';
const BoxGray = ({ dense, children, waterMark, white }) => {
	return (
		<Themes dense={dense} white={white}>
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
