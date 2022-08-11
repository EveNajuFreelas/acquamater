import { Container, Typography } from '@mui/material';
import styled from 'styled-components';

export const ContainerText = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 45px;
`;

export const Title = styled(Typography)``;

export const Description = styled.div`
	max-width: 30%;
	text-align: end;
`;

export const ContainerProducts = styled.div`
	& > *:nth-child(2n) {
		background-color: #f0f0f0;
	}
`;

export const ContainerProduct = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const HeadPage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 10%;
	padding-bottom: 15%;
	background: url('http://www.patobragado.pr.gov.br/uploads/article/2021-02/saude-promove-palestras-de-prevencao-a-covid-19-na-escola-municipal-d7f2c94b32.jpg')
		rgba(0, 42, 194, 0.8);
	background-size: cover;
	background-blend-mode: multiply;

	color: #fff;
	position: relative;

	clip-path: polygon(
		100% 0%,
		0% 0%,
		0% 93.75%,
		1% 93.74%,
		2% 93.73%,
		3% 93.69%,
		4% 93.65%,
		5% 93.6%,
		6% 93.53%,
		7% 93.45%,
		8% 93.36%,
		9% 93.26%,
		10% 93.14%,
		11% 93.02%,
		12% 92.88%,
		13% 92.74%,
		14% 92.58%,
		15% 92.41%,
		16% 92.24%,
		17% 92.05%,
		18% 91.85%,
		19% 91.65%,
		20% 91.44%,
		21% 91.22%,
		22% 90.99%,
		23% 90.76%,
		24% 90.52%,
		25% 90.27%,
		26% 90.02%,
		27% 89.76%,
		28% 89.5%,
		29% 89.24%,
		30% 88.97%,
		31% 88.7%,
		32% 88.43%,
		33% 88.15%,
		34% 87.87%,
		35% 87.6%,
		36% 87.32%,
		37% 87.04%,
		38% 86.76%,
		39% 86.49%,
		40% 86.22%,
		41% 85.95%,
		42% 85.68%,
		43% 85.41%,
		44% 85.15%,
		45% 84.9%,
		46% 84.65%,
		47% 84.4%,
		48% 84.17%,
		49% 83.94%,
		50% 83.71%,
		51% 83.49%,
		52% 83.28%,
		53% 83.08%,
		54% 82.89%,
		55% 82.71%,
		56% 82.53%,
		57% 82.37%,
		58% 82.22%,
		59% 82.07%,
		60% 81.94%,
		61% 81.82%,
		62% 81.71%,
		63% 81.61%,
		64% 81.52%,
		65% 81.45%,
		66% 81.39%,
		67% 81.33%,
		68% 81.29%,
		69% 81.27%,
		70% 81.25%,
		71% 81.25%,
		72% 81.26%,
		73% 81.28%,
		74% 81.32%,
		75% 81.36%,
		76% 81.42%,
		77% 81.49%,
		78% 81.58%,
		79% 81.67%,
		80% 81.78%,
		81% 81.9%,
		82% 82.02%,
		83% 82.16%,
		84% 82.31%,
		85% 82.47%,
		86% 82.64%,
		87% 82.82%,
		88% 83.01%,
		89% 83.21%,
		90% 83.41%,
		91% 83.63%,
		92% 83.85%,
		93% 84.08%,
		94% 84.32%,
		95% 84.56%,
		96% 84.81%,
		97% 85.06%,
		98% 85.32%,
		99% 85.58%,
		100% 85.85%
	); ;
`;
