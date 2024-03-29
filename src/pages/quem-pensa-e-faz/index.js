import {
	Box,
	Button,
	Container,
	Typography,
	Divider,
	Grid,
} from '@mui/material';
import {
	AdvisoryBoardSectionContainer,
	SectionBlueTitle,
	OrgSectionContainer,
	TextOrganism,
	ParceirosContainer,
	ParceiroImg,
} from './styles';
import { colors } from '../../theme/colors';
import ColumnTextImage from '../../components/ColumnTextImage';
import { PersonCard } from '../../components/person-card';
import { useState } from 'react';
import {
	brazilAdvisoryBoard,
	worldAdvisoryBoard,
} from '../../utils/advisory-board-people';
import { AdvisoryBoardModal } from './advisory-board-modal';
import { Head } from '../../components/head';
import { Wrapper } from '../styles';

export const QuemPensaFaz = () => {
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
					{ url: '/', name: 'Home' },
					{ url: '/acqua-mater', name: 'Acqua Mater' },
				]}
				title='Quem Pensa e Faz'
				backgroundImage='/acquamater/quem-pensa-faz/quem-pensa-faz-head.png'
			/>
			<OrgSectionContainer>
				<Wrapper>
					<TextOrganism variant='body1' color='primary.main'>
						Funcionamos como um organismo multicelular, composto de
						várias células, que são PESSOAS e ORGANIZAÇÕES com as
						quais trocamos ideias, idealizamos e realizamos
						projetos, potencializados por meio da cooperação e da
						diversidade cultural que caracteriza nossos parceiros,
						com os quais compartilhamos valores e objetivos.
					</TextOrganism>
					<img
						src='/acquamater/quem-pensa-faz/quem-pensa-faz-grafico.png'
						alt='gráfico'
						width='400px'
					/>
				</Wrapper>
			</OrgSectionContainer>
			<Wrapper>
				<ColumnTextImage
					title='Patrícia Furtado de Mendonça'
					image={{
						isBg: false,
						img: '/acquamater/patricia-furtado-2.png',
					}}
					buttons={[
						{ url: '/patricia-furtado', title: 'Saiba Mais' },
					]}
				>
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
				</ColumnTextImage>
			</Wrapper>

			<AdvisoryBoardSectionContainer>
				<Wrapper>
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
					<Grid container justifyContent='center'>
						{worldABView.map(wab => (
							<Grid item sx={1} minHeight='520px'>
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
					<Grid container justifyContent='center'>
						{brazilABView.map(bab => (
							<Grid item sx={1} minHeight='520px'>
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
					<Button onClick={changeBrazilAdvisoryBoard}>
						Conheça Todos
					</Button>
				</Wrapper>
			</AdvisoryBoardSectionContainer>
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
						<ParceiroImg src='/acquamater/white-placeholder.png' />
					))}
				</Grid>
				<Button>Conheça Todos</Button>
			</ParceirosContainer>
		</Box>
	);
};
