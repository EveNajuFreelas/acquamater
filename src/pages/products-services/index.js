import ColumnTextImage from '../../components/ColumnTextImage';
import {
	ContainerProducts,
	HeadPage,
	Description,
	ContainerText,
	ContainerProduct,
} from './styles';
import { Typography } from '@mui/material';
import { Wrapper } from '../styles';

const ProductsServices = () => {
	return (
		<>
			<HeadPage image={'/acquamater/head-products.png'}>
				<ContainerText maxWidth='lg'>
					<Typography
						variant='h1'
						sx={{ color: '#fff', fontSize: '2.5rem' }}
					>
						O que oferecemos
					</Typography>

					<Description>
						<Typography variant='subtitle1' sx={{ color: '#fff' }}>
							Todos os Produtos da Acqua Mater são realizados
							tendo por eixo a ÁGUA e o OCEANO e têm sinergia
							entre si, podendo se articular dependendo das
							necessidades do cliente
						</Typography>
					</Description>
				</ContainerText>
			</HeadPage>

			<ContainerProducts>
				<ContainerProduct>
					<Wrapper>
						<ColumnTextImage
							image={{ isBg: false, img: '/acquamater/last-products.png' }}
							title='Palestras'
							pathName='/o-que-oferecemos/palestras'
							buttons={[
								{
									title: 'Saiba mais',
									url: '/palestras',
								},
							]}
						>
							Oferecemos uma série de <strong>Palestras</strong>{' '}
							ligadas ao Mundo ÁGUA-OCEANO que incentivam
							reflexões, pesquisas, mudanças de comportamneto e
							tomadas de decisão. Janelas sobre o mundo para ver
							mais e além. Uma "lente azul" através da qual
							conseguimos olhar para a vida, relações e os
							negócios sob um prisma disruptivo e revelador.
						</ColumnTextImage>
					</Wrapper>
				</ContainerProduct>
				<ContainerProduct>
					<Wrapper>
						<ColumnTextImage
							image={{ isBg: false, img: '/acquamater/last-products.png' }}
							title='Capacitação'
							pathName='/o-que-oferecemos/capacitacao'
							buttons={[
								{
									title: 'Saiba mais',
									url: '/capacitacao',
								},
							]}
							reverse
						>
							Oferecemos{' '}
							<strong>Workshops, Treinamentos e Cursos</strong>{' '}
							com o objetivo de sensibilizar, informar e formar
							multiplicadores do conhecimento que aprendam e
							apliquem novas ferramentas para atuar em prol da
							conservação, da regeneração e da sustentabilidade de
							todos os ecossistemas do Mundo ÁGUA-OCEANO.
						</ColumnTextImage>
					</Wrapper>
				</ContainerProduct>

				<ContainerProduct>
					<Wrapper>
						<ColumnTextImage
							image={{ isBg: false, img: '/acquamater/last-products.png' }}
							title='Consultorias'
							pathName='/o-que-oferecemos/consultoria'
							buttons={[
								{
									title: 'Saiba mais',
									url: '/consultoria',
								},
							]}
						>
							Oferecemos Consultorias de{' '}
							<strong>Conteúdo de Curadoria</strong> e de{' '}
							<strong>Soluções Integradas</strong> para ajudar
							pessoas e organizações a adquirirem uma visão 360°
							do Mundo ÁGUA-OCEANO e para encontrar soluções que
							gerem mais saúde e mais vida em nosso planeta.
						</ColumnTextImage>
					</Wrapper>
				</ContainerProduct>

				<ContainerProduct>
					<Wrapper>
						<ColumnTextImage
							image={{ isBg: false, img: '/acquamater/last-products.png' }}
							title='Experiência'
							pathName='/o-que-oferecemos/experiencia'
							buttons={[
								{
									title: 'Saiba mais',
									url: '/experiencia',
								},
							]}
							reverse
						>
							Oferecemos Workshops, Viagens e Eventos Artísticos
							para reconectar as pessoas mais profundamente com o
							Mundo ÁGUA-OCEANO sob as perspectivas pessoal,
							social e ambiental. Os participantes "mergulharão em
							suas próprias águas” ao mesmo tempo em que irão
							desacelerar dos ritmos urbanos e ampliar sua
							percepção sobre a vida e o mundo.
						</ColumnTextImage>
					</Wrapper>
				</ContainerProduct>
			</ContainerProducts>
		</>
	);
};

export default ProductsServices;
