import { Button, Typography } from '@mui/material';
import ColumnTextImage from '../../../components/ColumnTextImage';
import {
	ContainerTextSingle,
	ContainerTitle,
	HeadPage,
	Title,
} from '../styles';
import {
	ContainerList,
	FirstColumn,
	SecondColumn,
	ContainerColumn,
	ListConsultancy,
	Column,
	ColumnPhotos,
	ContainerColumns,
} from './styles';
import { Wrapper } from '../../styles';
import BoxGray from '../../../components/BoxGray';
import { colors } from '../../../theme/colors';
import Photo from './Photo';
import { Strip } from '../../../components/Strip';

const Experiences = () => {
	const firstList = [
		'Corporativo (Team Building)',
		'Profissionais da Saúde',
		'Profissionais dos setores “Água & Saneamento” e “Oceano”',
		'Artistas do Corpo e Esportistas',
		'Quem tem Medo da Água',
		'Quem busca Autoconhecimento',
	];

	const secondList = [
		'Shows Musicais (voz e violão ou com banda para acompanhamento);',
		'Leitura de Poesia com acompanhamento musical;',
		'Mostras de Fotografia – artística e/ou com fins pedagógicos;',
		'Mostras de Filmes para adultos e crianças;',
		'Instalações artísticas com videomapping;',
		'Performances de Dança/Teatro para adultos;',
		'Contação de Histórias & Música para crianças;',
		'Peças de Teatro infantis.',
	];
	return (
		<>
			<HeadPage image='/acquamater/head-experience.png' noMargin>
				<ContainerTextSingle maxWidth='lg'>
					<Typography variant='subtitle1' sx={{ color: '#fff' }}>
						Oferecemos Workshops, Viagens e Eventos Artísticos para
						reconectar as pessoas mais profundamente com o Mundo
						ÁGUA-OCEANO sob as perspectivas pessoal, social e
						ambiental. Os participantes “mergulharão em suas
						próprias águas” ao mesmo tempo em que irão desacelerar
						dos ritmos urbanos e ampliar sua percepção sobre a vida
						e o mundo.
					</Typography>
				</ContainerTextSingle>
			</HeadPage>
			<ContainerTitle image='/experience_wave.png'>
				<Title maxWidth='lg'>Experiências</Title>
			</ContainerTitle>
			<Wrapper>
				<ColumnTextImage
					image={{
						isBg: false,
						img: '/acquamater/experience-first.png',
					}}
					title='worshops'
				>
					São vivências que acontecem dentro de piscinas aquecidas ou
					de águas naturais, que nos permitem relaxar e desacelerar,
					desconectar dos ritmos urbanos para nos reconectarmos com
					nossa verdadeira essência, num espaço de confiança e
					respeito. As águas “de fora” nos permitem conectar com as
					águas “de dentro”, com as memórias, as emoções. Um veículo
					de autoconhecimento que também desperta uma nova consciência
					ambiental em relação às águas que circulam em nosso planeta.
					A vivência pode ter entre 2 e 4 horas ou entre 2 e 5 dias,
					segundo a profundidade que se quer alcançar. 3 Pilares do
					Workshop Acqua Mater Experience (A.M.E.): Presença, Escuta,
					Cuidado.
				</ColumnTextImage>
			</Wrapper>
			<Wrapper>
				<div style={{ width: '100%', margin: '50px 0px' }}>
					<BoxGray dense>
						<ContainerList>
							<FirstColumn>
								<Typography
									color={colors.blueLighter}
									fontWeight='bold'
									lineHeight='2'
								>
									As práticas são adaptadas segundo às
									necessidades de cada público:
								</Typography>
							</FirstColumn>
							<SecondColumn>
								<ListConsultancy>
									{firstList.map(item => (
										<li>
											<span>{item}</span>
										</li>
									))}
								</ListConsultancy>
							</SecondColumn>
						</ContainerList>
						<Typography
							variant='body1'
							style={{ fontSize: '16px' }}
						>
							<a
								style={{
									fontWeight: 'bold',
									color: colors.primary,
								}}
								href='/cases'
							>
								Clique aqui{' '}
							</a>{' '}
							para ler alguns depoimentos de quem já participou
							dos workshops Acqua Mater Experience
						</Typography>
					</BoxGray>
				</div>
			</Wrapper>
			<ColumnTextImage
				image={{ isBg: true, img: '/acquamater/experience-second.png' }}
				title=''
				subtitle=''
				reverse
				noDivision
			>
				<Wrapper>
					<ContainerColumn>
						<Typography variant='h1' color='white'>
							DE VIAGENS
						</Typography>
						<Typography color='white'>
							(para grupos fechados ou abertos)
						</Typography>
						<Column>
							<div>
								<Typography color='white'>
									Organizamos viagens para lugares fortemente
									marcados pela presença da água (doce e/ou
									salgada), incluindo uma programação que,
									dependendo da proposta, pode propor:
									terapias aquáticas, prática de esportes
									aquáticos, passeios de barco, práticas de
									respiração e meditação que favorecem a
									conexão com as águas, atividades de educação
									ambiental, shows musicais temáticos,
									encontro com comunidades locais que contam
									histórias sobre as águas do lugar, etc.
								</Typography>
							</div>
							<div>
								<Typography color='white'>
									No caso de grupos de profissionais
									interessados em aprofundar conhecimentos
									ligados à Água & Saneamento, à Vida Marinha
									ou à conservação de ecossistemas aquáticos,
									é desenvolvida uma programação especial,
									guiada por especialistas (oceanógrafos,
									biólogos, cientistas, educadores ambientais)
									com visitas a estruturas locais que cuidam
									dessas águas e dos organismos vivos que as
									habitam.
									<br /> <br />
									As viagens podem ter como foco principal
									<strong>Descanso</strong> ou{' '}
									<strong>Conhecimento</strong> – ou podem ser
									uma mistura dos dois!
								</Typography>
							</div>
						</Column>
					</ContainerColumn>
				</Wrapper>
			</ColumnTextImage>

			<Wrapper>
				<div style={{ width: '100%', margin: '120px 0px' }}>
					<ContainerColumns>
						<FirstColumn>
							<Typography
								color={colors.blueLighter}
								fontWeight='bold'
								lineHeight='2'
							>
								Para 2023, em parceria com a Let Viagens de
								Experiência, estão sendo organizadas Expedições
								para os seguintes destinos:
							</Typography>
						</FirstColumn>
						<SecondColumn>
							<ColumnPhotos>
								<Photo
									img='/acquamater/experience-fernando-noronha.png'
									title='Fernando de Noronha'
								/>
								<Photo
									img='/acquamater/experience-serra-mantiqueira.png'
									title='Serra da Mantiqueira'
								/>
								<Photo
									img='/acquamater/experience-amazonia-paraense.png'
									title='Amazônia Paraense (rios Arapiuns e Tapajós).'
								/>
							</ColumnPhotos>
							<Button variant='outline'>
								Para mais informações, entre em contato conosco
							</Button>
						</SecondColumn>
					</ContainerColumns>
				</div>
			</Wrapper>

			<BoxGray waterMark>
				<Wrapper>
					<ColumnTextImage
						image={{
							isBg: false,
							img: '/acquamater/experience-first.png',
						}}
						title='ARTES & ENTRETENIMENTO'
						noPadding
					>
						Produzimos os mais variados eventos artísticos que
						tenham como tema principal a ÁGUA e/ou o OCEANO.
						Montamos a programação de acordo com a necessidade e o
						desejo do cliente, segundo o público-alvo e a
						formalidade/informalidade do evento, como: Festivais,
						Congressos, Expedições & Viagens, Casamentos, Datas
						Celebrativas em escolas ou cidades (Dia da Água, do
						Oceano, do Meio Ambiente etc), entre outros.
						<br />
						<br />
						Como a Acqua Mater nasce no fértil e multifacetado
						ambiente das Artes, mantém-se fiel às suas origens e
						proporciona experiências artísticas e sensíveis capazes
						de nos reconectar fortemente ao incrível Mundo
						ÁGUA-OCEANO.
					</ColumnTextImage>
					<div style={{ width: '100%', margin: '50px 0px' }}>
						<BoxGray dense white>
							<ContainerList>
								<FirstColumn>
									<Typography
										color={colors.blueLighter}
										fontWeight='bold'
										lineHeight='2'
									>
										O QUE ORGANIZAMOS
									</Typography>
								</FirstColumn>
								<SecondColumn>
									<ListConsultancy>
										{secondList.map(item => (
											<li>
												<span>{item}</span>
											</li>
										))}
									</ListConsultancy>
									<Button
										variant='outline'
										style={{ marginTop: '40px' }}
									>
										Para mais informações, entre em contato
										conosco
									</Button>
								</SecondColumn>
							</ContainerList>
						</BoxGray>
					</div>
				</Wrapper>
			</BoxGray>
			<Strip
				img='/acquamater/experience-ball.png'
				imgBG='/acquamater/experience-bg-bola.png'
				textBall='De que EXPERIÊNCIA você precisa?'
			/>
		</>
	);
};

export default Experiences;
