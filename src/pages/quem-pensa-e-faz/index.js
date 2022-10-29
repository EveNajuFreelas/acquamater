import {
	Box,
	Button,
	Typography,
	Divider,
	Grid,
	useMediaQuery,
	Container,
} from '@mui/material';
import {
	SectionBlueTitle,
	TextOrganism,
	ParceirosContainer,
	ParceiroImg,
} from './styles';
import { colors } from '../../theme/colors';
import { PersonCard } from '../../components/person-card';
import { useState } from 'react';
import {
	brazilAdvisoryBoard,
	worldAdvisoryBoard,
} from '../../utils/advisory-board-people';
import { AdvisoryBoardModal } from './advisory-board-modal';
import { Head } from '../../components/head';
import { BackgroundImage, Wrapper } from '../styles';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

export const QuemPensaFaz = () => {
	const isLargeDesktop = useMediaQuery('(min-width:1024px)', { noSsr: true });
	const navigate = useNavigate();

	const intialWorldABValue = worldAdvisoryBoard.slice(0, 4);
	const initialBrazilABValue = brazilAdvisoryBoard.slice(0, 4);

	const [isOpen, setIsOpen] = useState(false);
	const [modalContent, setModalContent] = useState({});
	const [worldABView, setWorldABView] = useState(intialWorldABValue);
	const [brazilABView, setBrazilABView] = useState(initialBrazilABValue);

	const handleModalState = (section, id) => {
		setIsOpen(true);
		setModalContent(section[id]);
	};

	const handleClose = () => {
		setIsOpen(false);
		setModalContent({});
	};

	const changeWorldAdvisoryBoardView = () => {
		setWorldABView(curr =>
			curr.length === 4 ? worldAdvisoryBoard : intialWorldABValue
		);
	};

	const changeBrazilAdvisoryBoard = () => {
		setBrazilABView(curr =>
			curr.length === 4 ? brazilAdvisoryBoard : initialBrazilABValue
		);
	};

	return (
		<Box>
			<Head
				breadcrumbs={[
					{ url: '/acquamater', name: 'Home' },
					{ url: '/acquamater', name: 'Acqua Mater' },
				]}
				title='Quem Pensa e Faz'
				backgroundImage='/acquamater/quem-pensa-faz/quem-pensa-faz-head.png'
			/>
			<Box position="relative" style={{ marginTop: '-6%', marginBottom: isLargeDesktop ? '10%' : '5%' }}>
				<BackgroundImage src="/acquamater/quem-pensa-faz/quem-pensa-faz-section-1.png" alt="BG" />
				<TextOrganism variant='body1' color='primary.main' style={{ paddingTop: '10%' }}>
					Funcionamos como um organismo multicelular, composto de
					várias células, que são PESSOAS e ORGANIZAÇÕES com as
					quais trocamos ideias, idealizamos e realizamos
					projetos, potencializados por meio da cooperação e da
					diversidade cultural que caracteriza nossos parceiros,
					com os quais compartilhamos valores e objetivos.
				</TextOrganism>
				<Box w='100%' display="flex">
					<img
						style={{ margin: '0 auto' }}
						src='/acquamater/quem-pensa-faz/quem-pensa-faz-grafico.png'
						alt='gráfico'
						width={isLargeDesktop ? '500px' : '350px'}
					/>
				</Box>
			</Box>
			<Wrapper style={{ marginBottom: '50px'}}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<img src="/acquamater/patricia-furtado-2.png" alt="Patrícia" width="100%" />
					</Grid>
					<Grid item xs={12} md={5}>
						<Typography variant="h2" color={colors.blueLighter} style={{ marginBottom: '20px' }}>
							Patrícia Furtado de Mendonça
						</Typography>
						<Typography variant='body1'>
							- Brasileira e Italiana, Empreendedora, Palestrante
							Inspiracional / Storyteller, Defensora do Oceano e das
							Águas, Facilitadora de Experiências de Reconexão com a Água
							e com o Oceano, Mergulhadora;
							<br />
							- "Profissional de ImPacto" da Rede Brasil do Pacto Global
							da ONU;
							<br />
							- Co-líder do Componente "Treinamento" do OLWA (Ocean
							Literacy With All), programa coordenado pela COI-UNESCO e
							endossado pela Década do Oceano da ONU;
							<br />
							- Coordenadora-Brasil da RELATO (Red de Educación Latino
							Americana para el Océano);
							<br />- Mentora e Conselheira de várias organizações
							internacionais voltada para jovens, como Waterlution,
							Sustainable Ocean Alliance, UNFCCC YOUNGO Ocean's Voice,
							entre outras
							<br /> <br />
							Patricia atua na interface Artes-Educação-Sustentabilidade há mais de 20 anos, tendo trabalhado em âmbito acadêmico, artístico, empresarial, governamental e do terceiro setor. Multipotencial e motivada por sua imensa paixão por rios e mares, funda a ACQUA MATER em 2017 e coloca a ÁGUA e o OCEANO ao centro de todas as suas	atividades.
						</Typography>
						<Button onClick={() => navigate('/patricia-furtado')} style={{ marginTop: '50px'}}>
							<AddIcon />
							Saiba Mais
						</Button>
					</Grid>
				</Grid>
			</Wrapper>

			<Box position="relative">
				<BackgroundImage src="/acquamater/advisory-board-bg.png" alt="BG" />
				<Box style={{ padding: '7% 0', textAlign: 'center' }}>
					
				<AdvisoryBoardModal
					isOpen={isOpen}
					modalContent={modalContent}
					onCloseFunction={handleClose}
				/>
				<SectionBlueTitle variant='h1'>
					ADVISORY BOARD
				</SectionBlueTitle>
				<Typography variant='body1'>
					Formado em sua maioria por empreendedores, pesquisadores
					e especialistas em temas ligados ao Mundo ÁGUA-OCEANO,
					com os quais a Acqua Mater colabora e/ou nos quais
					confia para definir importantes diretrizes de seus
					projetos.
				</Typography>

				<Typography
					variant='h1'
					color={colors.blueLighter}
					paddingY='20px'
				>
					NO MUNDO
				</Typography>
				<Container maxW='lg'>
					<Grid container justifyContent='center'>
						{worldABView.map(wab => (
							<Grid item sx={1} minHeight='480px'>
								<PersonCard
									name={wab.name}
									img={`/acquamater${wab.image}`}
									country={wab.country}
									description={wab.description}
									section={worldAdvisoryBoard}
									id={wab.id}
									personClick={handleModalState}
								/>
							</Grid>
						))}
					</Grid>
				</Container>
				<Button onClick={changeWorldAdvisoryBoardView}>
					Conheça Todos
				</Button>

				<Divider width='80%' sx={{ marginTop: '30px' }} />

				<Typography
					variant='h1'
					color={colors.blueLighter}
					paddingY='20px'
				>
					NO BRASIL
				</Typography>
				<Container maxW="lg">
					<Grid container justifyContent='center'>
						{brazilABView.map(bab => (
							<Grid item sx={1} minHeight='480px'>
								<PersonCard
									name={bab.name}
									img={`/acquamater${bab.image}`}
									description={bab.description}
									section={brazilAdvisoryBoard}
									id={bab.id}
									personClick={handleModalState}
								/>
							</Grid>
						))}
					</Grid>
				</Container>
				<Button onClick={changeBrazilAdvisoryBoard}>
					Conheça Todos
				</Button>
				</Box>
			</Box>

			<Box position='relative'>
				<BackgroundImage />
			</Box>

			<ParceirosContainer>
				<SectionBlueTitle variant='h1'>PARCEIROS</SectionBlueTitle>
				<Typography variant='body1'>
					São organizações que desenvolvem soluções e tecnologias
					inovadoras voltadas à Conservação, à Regeneração e à
					Sustentabilidade de todos os ecossistemas aquáticos, assim
					como projetos de sensibilização para nossa reconexão com o
					Mundo ÁGUA-OCEANO.
				</Typography>

				<Typography
					variant='h1'
					color={colors.blueLighter}
					paddingY='20px'
				>
					NO MUNDO
				</Typography>
				<Grid container spacing={2} marginBottom={2}>
					{Array.from(Array(10)).map(a => (
						<ParceiroImg src='/acquamater/white-placeholder.png' />
					))}
				</Grid>
				<Button>Conheça Todos</Button>

				<Divider width='80%' sx={{ marginTop: '30px' }} />

				<Typography
					variant='h1'
					color={colors.blueLighter}
					paddingY='20px'
				>
					NO BRASIL
				</Typography>
				<Grid container spacing={2} marginBottom={2}>
					{Array.from(Array(10)).map(a => (
						<ParceiroImg src='/acquamater/white-placeholder.png' key={a} />
					))}
				</Grid>
				<Button>Conheça Todos</Button>
			</ParceirosContainer>
		</Box>
	);
};
