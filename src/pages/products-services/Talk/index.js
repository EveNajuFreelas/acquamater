import { Typography } from '@mui/material';
import ColumnTextImage from '../../../components/ColumnTextImage';
import { ContainerTextSingle, HeadPage } from '../styles';
import { ContainerTitle, Wrapper, Title } from './styles';
import people_circle from '../../../utils/images/people_circle.png';

const Talk = () => {
	return (
		<>
			<HeadPage
				image={
					'http://www.patobragado.pr.gov.br/uploads/article/2021-02/saude-promove-palestras-de-prevencao-a-covid-19-na-escola-municipal-d7f2c94b32.jpg'
				}
			>
				<ContainerTextSingle maxWidth='lg'>
					<Typography variant='subtitle1'>
						Oferecemos uma série de Palestras ligadas ao Mundo
						ÁGUA-OCEANO que incentivam reflexões, pesquisas,
						mudanças de comportamento e tomadas de decisão. Janelas
						sobre o mundo para ver mais e além. Uma "lente azul"
						através da qual conseguimos olhar para a vida, as
						relações e os negócios sob um prisma disruptivo e
						revelador.
					</Typography>
				</ContainerTextSingle>
			</HeadPage>
			<ContainerTitle>
				<Title maxWidth='lg'>Palestras</Title>
			</ContainerTitle>
			<Wrapper maxWidth='xl'>
				<ColumnTextImage
					image={people_circle}
					title='Palestras Patricia'
					pathName='/o-que-oferecemos/palestras'
				>
					A formação e a experiência de Patricia como Atriz e
					Professora fizeram dela uma verdadeira "Storyteller". Além
					de apresentar e moderar eventos, dá Palestras Inspiracionais
					para os mais variados públicos, no Brasil e no exterior,
					compartilhando sua experiência pessoal, suas pesquisas e
					aprendizagens relacionadas ao Mundo ÁGUA-OCEANO. Seu
					background artístico e sua pluralidade profissional permitem
					que misture temas, transmita dados científicos e informações
					atuais que favoreçam mudanças de comportamento e tomadas de
					decisão. Sua visão sistêmica é capaz de sensibilizar as
					pessoas, visando à transformação humana, social e ambiental.
					<p>
						Línguas Fluentes: português, inglês, espanhol, italiano.
					</p>
				</ColumnTextImage>
			</Wrapper>
		</>
	);
};

export default Talk;
