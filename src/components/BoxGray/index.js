import { Themes, Wave } from './styles';
const BoxGray = ({ dense, children, waterMark }) => {
	return (
		<Themes dense={dense}>
			{children}
			{waterMark && (
				<Wave>
					<img src='/wave.png' alt="wave" />
				</Wave>
			)}
		</Themes>
	);
};

export default BoxGray;
