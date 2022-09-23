import { Typography } from '@mui/material';
import ColumnTextImage from '../../../components/ColumnTextImage';
import {
	ContainerTextSingle,
	ContainerTitle,
	HeadPage,
	Title,
} from '../styles';
import {
	List,
	Link,
	ContainerColumn2,
	ContainerImage,
	WrapperContainer,
} from './styles';
import { Wrapper } from '../../styles';
import BoxGray from '../../../components/BoxGray';
import { colors } from '../../../theme/colors';
import { Strip } from '../../../components/Strip';

const Training = () => {
	const listThemes = [
		'Permacultura',
		'Agrofloresta',
		'Construção de Biodigestores',
		'Construção de banheiros secos para populações vulneráveis',
		'Cosmética Natural',
		'Saboaria Natural',
		'Detergentes Ecológico',
	];

	return (
		<>
			<HeadPage image='head-training.png' noMargin>
				<ContainerTextSingle maxWidth='lg'>
					<Typography variant='subtitle1' sx={{ color: '#fff' }}>
						Oferecemos{' '}
						<strong>Workshops, Treinamentos e Cursos</strong> com o
						objetivo de sensibilizar, informar e formar
						multiplicadores do conhecimento que aprendam e apliquem
						novas ferramentas para atuar em prol da conservação, da
						regeneração e da sustentabilidade de todos os
						ecossistemas do Mundo ÁGUA-OCEANO.
					</Typography>
				</ContainerTextSingle>
			</HeadPage>
			<ContainerTitle color='#005980'>
				<Title maxWidth='lg'>Capacitação</Title>
			</ContainerTitle>
			<Wrapper>
				<ColumnTextImage
					image={{ isBg: false, img: 'training-first.png' }}
					title='ESCOLA NÔMADE DA ÁGUA'
				>
					São projetos de Educação Ambiental que promovem “Uma Nova
					Cultura da Água” e a “Cultura Oceânica”. Idealizados e
					realizados pela Acqua Mater, são voltados, principalmente,
					para o público infanto-juvenil: comunidade escolar,
					festivais, eventos ao ar-livre etc.
					<br />
					<br />
					<Link>Conheça o Case do Projeto SOMOS ÁGUA</Link>
				</ColumnTextImage>
			</Wrapper>
			<ColumnTextImage
				image={{ isBg: true, img: 'training-second-bg.png' }}
				title=''
				invertedColors
				noDivision
			>
				<Wrapper>
					<ContainerColumn2>
						<WrapperContainer>
							<ContainerImage>
								<img src='training-second-image.png' alt="Training"></img>
							</ContainerImage>
						</WrapperContainer>
						<div>
							<Typography variant='h1' color='white'>
								BLUE BUSINESS HUB
							</Typography>
							<br />
							<Typography color='white'>
								São Webinars e Treinamentos (presenciais e
								online) voltados, especificamente, ao público
								corporativo, para promover transformações
								socioambientais tendo como ponto de partida o
								cuidado com o Mundo ÁGUA-OCEANO.
								<br />
								<br />
								Neste momento, a Acqua Mater está desenvolvendo
								um treinamento de “Cultura Oceânica para o Setor
								Privado” dentro do Programa OLWA (Ocean Literacy
								With All) coordenado pela COI-UNESCO e endossado
								pela Década da ONU da Ciência Oceânica para o
								Desenvolvimento Sustentável.
								<br />
								<br />
								<strong>Mais informações em breve!</strong>
							</Typography>
						</div>
					</ContainerColumn2>
				</Wrapper>
			</ColumnTextImage>

			<Wrapper style={{ marginTop: '50px' }}>
				<ColumnTextImage
					image={{ isBg: false, img: 'training-third.png' }}
					title='OCTOPUS'
				>
					São diversos Workshops, Treinamentos e Cursos (presenciais e
					online) que visam à saúde das águas, principalmente para
					evitar a contaminação dos ecossistemas aquáticos. São
					dirigidos a quem busca agir de modo mais sustentável em suas
					propriedades, cidades ou empreendimentos comerciais
					(residências, condomínios, comunidades, hotéis, shoppings,
					centros comerciais etc).
					<br />
					<br />
					<Typography color={colors.primary}>ALGUNS DELES</Typography>
					<br />
					<List>
						{listThemes.map(item => (
							<li>{item}</li>
						))}
					</List>
				</ColumnTextImage>

				<div style={{ width: '100%' }}>
					<BoxGray dense waterMark>
						<ColumnTextImage
							image={{ isBg: false, img: 'training-last.png' }}
							noPadding
							textRight
							reverse
						>
							Essas capacitações são realizadas pelos vários
							Parceiros de confiança da Acqua Mater, que possuem
							diversas especializações e encontram-se em
							diferentes Estados do Brasil.
							<br />
							Por isso, esse projeto chama-se OCTOPUS: eles são
							seus braços, ou tentáculos, que alcançam para além
							de seus próprios limites. Polvos também são animais
							marinhos extremamente inteligentes e conhecidos por
							sua imensa capacidade de “resolver problemas”.
						</ColumnTextImage>
					</BoxGray>
				</div>
			</Wrapper>
			<Strip
				img='/training-ball.png'
				imgBG='/training-bg-bola.png'
				textBall='De que CAPACITAÇÃO você precisa?'
			/>
		</>
	);
};

export default Training;
