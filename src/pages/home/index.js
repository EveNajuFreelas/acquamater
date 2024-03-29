import { Button, Divider, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import ColumnTextImage from '../../components/ColumnTextImage';
import { QuoteSection } from '../../components/quote-section';
import { ModalContainer } from '../quem-pensa-e-faz/styles';
import { Wrapper } from '../styles';
import { ContainerSection, ImgContainer } from './styles';

const Home = () => {
	const [openModal, setOpenModal] = useState(false);

	const handleModal = () => {
		setOpenModal(curr => !curr);
	}

	return (
		<>
			<Modal open={openModal} onClose={handleModal}>
            	<ModalContainer justifyContent="center" overflow="hidden">
					<Typography variant="h3">
					"Estamos extremamente orgulhosos de continuar tendo Patricia Furtado De Mendonça desempenhando um papel ativo no projeto SEA BEYOND, o programa educacional desenvolvido pelo Grupo Prada em colaboração com a COI-UNESCO, para difundir os princípios da Cultura Oceânica em todo o mundo. Sua paixão pela educação e sua empatia são uma verdadeira fonte de inspiração. A água é seu elemento nativo e sua profunda ligação com o Mar é verdadeira e pura poesia!"
					</Typography>
					<Divider variant="middle" width="100%" borderColor="black" sx={{ marginY: '40px'}} />
					<Typography variant="body3">Equipe de Comunicação Corporativa do Grupo Prada</Typography>
				</ModalContainer>
			</Modal>
			<ImgContainer
				src='/acquamater/home-intro.png'
				alt='Acqua Mater introdução'
			/>
			<Wrapper>
				<ColumnTextImage
					image={{
						img: '/acquamater/acqua-mater-name.png',
						isBg: false,
					}}
					buttons={[
						{ title: 'Saiba Mais', url: '/quem-somos' },
						{
							title: 'Assista ao filme SOMOS ÁGUA',
							url: 'https://www.youtube.com/watch?v=W740g2Shb7s',
						},
					]}
				>
					Somos uma organização brasileira com atuação global que
					incentiva a geração de mais saúde e mais vida a partir do
					cuidado de todas as águas que circulam no planeta. Nossos
					projetos transdisciplinares são voltados à Conservação, à
					Regeneração e à Sustentabilidade de toda a vida que habita o
					Mundo ÁGUA-OCEANO
				</ColumnTextImage>
				<ColumnTextImage
					title='Patrícia Furtado de Mendonça'
					image={{
						img: '/acquamater/patricia-furtado.png',
						isBg: false,
					}}
					buttons={[
						{
							title: 'Saiba Mais',
							url: '/patricia-furtado',
						},
					]}
				>
					- Brasileira e Italiana, Empreendedora, Palestrante
					Inspiracional/Storyteller, Defensora do Oceano e das Águas,
					Facilitadora de Experiências de Reconexão com a Água e com o
					Oceano, Mergulhadora; <br />
					- "Profissional de ImPacto" da Rede Brasil do Pacto Global
					da ONU; <br />
					- Co-lider do Componente "Treinamento" do OLWA (Ocean
					Literacy With All), programa coordenado pela COI-UNESCO e
					endossado pela Década do Oceano da ONU; <br />
					- Coordenadora-Brasil da RELATO (Red de Educación
					LatinoAmericana para el Océano); <br />- Mentora e
					Conselheira de várias organizações internacionais voltada
					para jovens, como Waterlution, Sustainable Ocean Alliance,
					UNFCCC YOUNGO Ocean's Voice, entre outras.
				</ColumnTextImage>
			</Wrapper>
			<QuoteSection
				background='/acquamater/bg-prada-quote.png'
				text='"Estamos extremamente orgulhosos de continuar tendo Patricia Furtado de Mendonça desempenhando um papel ativo no projeto SEA BEYOND, o programa educacional desenvolvido pelo Grupo Prada em colaboração com a COI-UNESCO, para difundir os princípios da Cultura Oceânica em todo o mundo."'
				author='EQUIPE DE COMUNICAÇÃO CORPORATIVA DO GRUPO PRADA/ITÁLIA'
				authorLogo='/acquamater/prada-logo.png'
				textStyle='body1bold'
			>
				<Button onClick={handleModal} sx={{ marginBottom: '20px' }}>Ler mais</Button>
			</QuoteSection>

			<ColumnTextImage
				reverse
				invertedColors
				image={{
					img: '/acquamater/o-que-oferecemos-bg.png',
					isBg: true,
				}}
				title='O que Oferecemos'
				buttons={[{ title: 'Saiba Mais', url: '/o-que-oferecemos' }]}
				personalize
			>
				Todos os Produtos da Acqua Mater são realizados tendo por eixo a
				ÁGUA e O OCEANO e tem sinergia entre si, podendo se articular
				dependendo das necessidades do cliente.
				<br />
				<img
					src='/acquamater/o-que-oferecemos-graph.png'
					alt='o-que-oferecemos gráfico'
					style={{ marginTop: '15px', width: '500px' }}
				/>
			</ColumnTextImage>

			<ContainerSection>
				<ColumnTextImage
					reverse
					image={{
						img: '/acquamater/como-atuamos-bg.png',
						isBg: false,
					}}
					title='Como atuamos'
					buttons={[
						{
							title: 'Conheça nosso Advisory Board',
							url: '/quem-pensa-e-faz#advisory-board',
						},
						{
							title: 'Conheça nossos Parceiros',
							url: '/parceiros',
						},
					]}
				>
					Tudo começa com uma troca: ouvimos as necessidades de cada
					cliente e, a partir daí, desenhamos e apresentamos a solução
					que consideramos ser a mais assertiva. Os produtos são
					personalizados, nascem de um processo de construção
					colaborativa que também inclui a participação de nosso
					Advisory Board e de uma ampla rede de Parceiros.
				</ColumnTextImage>
			</ContainerSection>
		</>
	);
};

export default Home;
