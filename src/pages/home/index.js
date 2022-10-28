import { Button, Container, Divider, Grid, Modal, Typography, Box } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ColumnTextImage from '../../components/ColumnTextImage';
import { colors } from '../../theme/colors';
import { ModalContainer } from '../quem-pensa-e-faz/styles';
import { Wrapper } from '../styles';
import { BackgroundImage, BoxContainer, ContainerSection } from './styles';
import AddIcon from '@mui/icons-material/Add';

const Home = () => {
	const navigate = useNavigate();
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
					<Divider variant="middle" width="100%" borderColor="black" sx={{ marginY: '40px' }} />
					<Typography variant="body3">Equipe de Comunicação Corporativa do Grupo Prada</Typography>
				</ModalContainer>
			</Modal>
			<img
				src='/acquamater/home-intro.png'
				alt='Acqua Mater introdução'
				width='100%'
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
				<Container maxW="lg">
					<Grid container spacing={2} style={{ marginTop: '40px' }}>
						<Grid item xs={12} md={4}>
							<img width="90%" src="/acquamater/patricia-furtado.png" alt="Patrícia" />
						</Grid>
						<Grid item xs={12} md={8}>
							<Typography
								variant="h1"
								color={colors.blueLighter}
								style={{ marginBottom: '20px' }}
							>
								Patrícia Furtado de Mendonça
							</Typography>
							<Typography variant="body1">
								- Brasileira e Italiana, Empreendedora, Palestrante Inspiracional/Storyteller, Defensora do Oceano e das Águas, Facilitadora de Experiências de Reconexão com a Água e com o Oceano, Mergulhadora; <br />
								- "Profissional de ImPacto" da Rede Brasil do Pacto Global da ONU; <br />
								- Co-lider do Componente "Treinamento" do OLWA (Ocean Literacy With All), programa coordenado pela COI-UNESCO e endossado pela Década do Oceano da ONU; <br />
								- Coordenadora-Brasil da RELATO (Red de Educación LatinoAmericana para el Océano); <br />- Mentora e Conselheira de várias organizações internacionais voltada para jovens, como Waterlution, Sustainable Ocean Alliance, UNFCCC YOUNGO Ocean's Voice, entre outras.
							</Typography>
							<Box w="100%" display="flex" justifyContent="center" mt="40px">
								<Button onClick={() => navigate("/patricia-furtado")}>
									<AddIcon />
									Saiba Mais
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Wrapper>

			<BoxContainer>
				<BackgroundImage src="/acquamater/bg-prada-quote.png" alt="bg" />
				<Box
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					height="100%"
					zIndex={2}
					padding="5% 0"
				>
					<Typography variant="body1bold" color="white" textAlign="center" style={{ padding: 15 }}>
						"Estamos extremamente orgulhosos de continuar tendo Patricia Furtado de Mendonça desempenhando um papel ativo no projeto SEA BEYOND, o programa educacional desenvolvido pelo Grupo Prada em colaboração com a COI-UNESCO, para difundir os princípios da Cultura Oceânica em todo o mundo."
					</Typography>
					<Button onClick={handleModal} sx={{ marginBottom: '40px' }}>Ler mais</Button>
					<Divider variant="middle" width="40%" style={{ borderColor: '#7fc31b' }} />
					<Typography variant="body2bold" color="white" style={{ marginTop: '40px' }}>
						EQUIPE DE COMUNICAÇÃO CORPORATIVA DO GRUPO PRADA/ITÁLIA
						<img style={{ marginLeft: '20px' }} width="100px" src="/acquamater/prada-logo.png" alt='prada' />
					</Typography>
				</Box>
			</BoxContainer>

			<BoxContainer padding="10% 0">
				<BackgroundImage src="/acquamater/o-que-oferecemos-bg.png" alt="bg" />
				<Container maxW='lg' style={{ margin: 0 }}>
					<Typography variant="h2" color={colors.lightGreen} m="20px 0">
						O que Oferecemos
					</Typography>
					<Typography variant="body1" color="white" style={{ width: '50%', margin: '0 5%', paddingTop: '20px' }}>
						Todos os Produtos da Acqua Mater são realizados tendo por eixo a
						ÁGUA e O OCEANO e tem sinergia entre si, podendo se articular
						dependendo das necessidades do cliente.
						<br />
						<Box display="flex" alignItems="end">
							<img
								src='/acquamater/o-que-oferecemos-graph.png'
								alt='o-que-oferecemos gráfico'
								style={{ marginTop: '15px', width: '400px' }}
							/>
							<Button variant="secondary" onClick={() => navigate('/o-que-oferecemos')}>Saiba Mais</Button>
						</Box>
					</Typography>

				</Container>
			</BoxContainer>

			<Grid container spacing={2} style={{ margin: '5% 0'}}>
				<Grid item xs={12} md={6} style={{ paddingTop: '5%', paddingLeft: '15%' }}>
					<Typography variant="h2" color={colors.blueLighter} style={{ marginBottom: '25px' }}>
						Como atuamos
					</Typography>
					<Typography variant="body1">
						Tudo começa com uma troca: ouvimos as necessidades de cada
						cliente e, a partir daí, desenhamos e apresentamos a solução
						que consideramos ser a mais assertiva. Os produtos são
						personalizados, nascem de um processo de construção
						colaborativa que também inclui a participação de nosso
						Advisory Board e de uma ampla rede de Parceiros.
					</Typography>
					<Box 
						style={{ 
							marginTop: '50px', 
							display: 'flex', 
							flexDirection: 'column', 
							height: '100px',
							justifyContent: 'space-around'
						}}>
						<Button 
							onClick={() => navigate('/quem-pensa-e-faz#advisory-board')}
							style={{ width: 'fit-content' }}
						>
							Conheça nosso Advisory Board
						</Button>
						<Button 
							onClick={() => navigate('/parceiros')}
							style={{ width: 'fit-content' }}
						>
							Conheça nossos Parceiros
						</Button>
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<img src="/acquamater/como-atuamos-bg.png" alt="como atuamos" width="100%" />
				</Grid>
			</Grid>
		</>
	);
};

export default Home;
