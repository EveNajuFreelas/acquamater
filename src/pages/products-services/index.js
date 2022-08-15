import './products-services.css';
import ColumnTextImage from '../../components/ColumnTextImage';
import {
	ContainerProducts,
	Title,
	HeadPage,
	Description,
	ContainerText,
	ContainerProduct,
} from './styles';
import people_circle from '../../utils/images/people_circle.png';
import { Typography } from '@mui/material';

const ProductsServices = () => {
	return (
		<>
			<HeadPage>
				<ContainerText maxWidth='lg'>
					<Title variant='h1'>O que oferecemos</Title>

					<Description>
						<Typography variant='subtitle1'>
							Todos os produtos da Acqua Mater são realizados tendo
							por eixo a ÁGUA e o OCEANO e têm sinergia entre si,
							podendo se articular dependendo das necessidades do
							cliente
						</Typography>
					</Description>
				</ContainerText>
			</HeadPage>
			
			<ContainerProducts>
				<ContainerProduct>
					<ColumnTextImage
						image={people_circle}
						content='Oferecemos uma série de Palestras ligadas ao Mundo ÁGUA-OCEANO que incentivam reflexões, pesquisas, mudanças de comportamneto e tomadas de decisão. Janelas sobre o mundo para ver mais e além. Uma "lente azul" através da qual conseguimos olhar para a vida, relações e os negócios sob um prisma disruptivo e revelador.'
						title='Palestras'
						button
					/>
				</ContainerProduct>

				<ContainerProduct>
					<ColumnTextImage
						image={people_circle}
						content='Oferecemos uma série de Palestras ligadas ao Mundo ÁGUA-OCEANO que incentivam reflexões, pesquisas, mudanças de comportamneto e tomadas de decisão. Janelas sobre o mundo para ver mais e além. Uma "lente azul" através da qual conseguimos olhar para a vida, relações e os negócios sob um prisma disruptivo e revelador.'
						title='Palestras'
						button
						reverse
					/>
				</ContainerProduct>

				<ContainerProduct>
					<ColumnTextImage
						image={people_circle}
						content='Oferecemos uma série de Palestras ligadas ao Mundo ÁGUA-OCEANO que incentivam reflexões, pesquisas, mudanças de comportamneto e tomadas de decisão. Janelas sobre o mundo para ver mais e além. Uma "lente azul" através da qual conseguimos olhar para a vida, relações e os negócios sob um prisma disruptivo e revelador.'
						title='Palestras'
						button
					/>
				</ContainerProduct>

				<ContainerProduct>
					<ColumnTextImage
						image={people_circle}
						content='Oferecemos uma série de Palestras ligadas ao Mundo ÁGUA-OCEANO que incentivam reflexões, pesquisas, mudanças de comportamneto e tomadas de decisão. Janelas sobre o mundo para ver mais e além. Uma "lente azul" através da qual conseguimos olhar para a vida, relações e os negócios sob um prisma disruptivo e revelador.'
						title='Palestras'
						button
						reverse
					/>
				</ContainerProduct>
			</ContainerProducts>
		</>
	);
};

export default ProductsServices;
