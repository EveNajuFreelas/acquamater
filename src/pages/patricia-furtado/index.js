import { Box, Button, Typography } from '@mui/material';
import {
	ContainerBio,
	Head,
	WrapperHead,
	ContainerHead,
	Text,
	WrapperSecond,
	WrapperTestimony,
	Videos,
	VideoSection,
	PodcastSection,
	Podcasts,
	PerformerSection,
	Performers,
} from './style';
import { colors } from '../../theme/colors';
import { QuoteSection } from '../../components/quote-section';
import ColumnTextImage from '../../components/ColumnTextImage';
import { Testimony } from './Testimony';
import { Video } from './Video';
import { Podcast } from './Podcast';

export const PatriciaFurtado = () => (
	<Box overflow='hidden'>
		<Head />
		<WrapperHead>
			<ContainerHead>
				<img src='/patricia-first.png'></img>
				<Text>
					<Typography
						variant='h2'
						color={colors.primary}
						fontWeight='bold'
					>
						Patricia Furtado de Mendonça
					</Typography>
					<Typography>Fundadora & CEO da Acqua Mater</Typography>
				</Text>
			</ContainerHead>
		</WrapperHead>

		<ContainerBio>
			<Typography variant='body1'>
				- Brasileira e Italiana, Empreendedora, Palestrante
				Inspiracional/Storyteller, Defensora do Oceano e das Águas,
				Facilitadora de Experiências de Reconexão com a Água e com o
				Oceano, Mergulhadora; <br />
				- “Profissional de ImPacto” da Rede Brasil do Pacto Global da
				ONU; <br />
				- Co-líder do Componente "Treinamento" do OLWA (Ocean Literacy
				With All), programa coordenado pela COI-UNESCO e endossado pela
				Década do Oceano da ONU; <br />
				- Coordenadora-Brasil da RELATO (Red de Educación
				LatinoAmericana para el Océano); <br />
				- Mentora e Conselheira de várias organizações internacionais
				voltada para jovens, como Waterlution, Sustainable Ocean
				Alliance, UNFCCC YOUNGO Ocean’s Voice, entre outras..
				<br />
				<br />
				Patricia atua na interface Artes-Educação-Sustentabilidade há
				mais de 20 anos, tendo trabalhado em âmbito acadêmico,
				artístico, empresarial, governamental e do terceiro setor.
				Multipotencial e motivada por sua imensa paixão por rios e
				mares, funda a ACQUA MATER em 2017 e coloca a ÁGUA e o OCEANO ao
				centro de todas as suas atividades.
			</Typography>
			<WrapperSecond>
				<Typography color='primary' fontWeight='bold'>
					Para a acessar a Bio completa, baixe o pdf
				</Typography>
				<Button>Download</Button>
			</WrapperSecond>

			<WrapperTestimony>
				<Testimony
					author='/patricia-marcelo.png'
					name='MARCELO LLÉVENES'
					country='Chile'
					role='Cofundador e Diretor Executivo da Clickie e ex-CEO da Enel Brasil - Distribuição'
				>
					“Trabalhei com Patricia na Ampla (atual Enel Distribuição)
					em diversos projetos de transformação cultural. Sua
					contribuição foi muito significativa: por sua diversidade,
					pela intensidade e pela paixão que colocava em tudo o que
					fazia (...).
					<br />
					<br />
					Acho que se a água tivesse que escolher um porta-voz, sem
					dúvida a Patrícia seria uma das principais candidatas! Ele
					consegue transmitir o que a água precisa, o que a água quer
					nos dizer.”
				</Testimony>

				<Testimony
					author='/patricia-susana.png'
					name='SUSANA SALVADOR'
					country='Portugal / França'
					role='Secretária Executiva ACCOBAMS'
				>
					“Participo em debates mais ou menos técnicos e/ou
					científicos, estruturados de forma semelhante, resultando em
					conclusões, documentos, relatórios, planos de ação. A
					apresentação da Patricia foi avassaladora porque a revelação
					da verdade singela surgiu a todos logo ali: proteger a água
					porque somos água. Graças à sua brilhante capacidade
					comunicativa e pondo tudo o que sentia nas palavras com que
					se expressava, a Patricia deu o mote à Conferência”
				</Testimony>
			</WrapperTestimony>
		</ContainerBio>

		<VideoSection>
			<Typography
				variant='h2'
				color='primary'
				style={{ marginBottom: '50px', fontSize: '32px' }}
			>
				VÍDEOS
			</Typography>
			<Videos>
				<Video img='/patricia-video-1.png' title='COI-UNESCO' />
				<Video img='/patricia-video-2.png' title='GALP ENERGIA' />
				<Video img='/patricia-video-3.png' title='A ÁGUA QUE FALTA' />
				<Video img='/patricia-video-4.png' title='SOMOS ÁGUA' />
				<Video
					img='/patricia-video-5.png'
					title='A ÁGUA QUE FALTA'
					subtitle='(Making of)'
				/>
				<Video
					img='/patricia-video-6.png'
					title='A ÁGUA QUE FALTA'
					subtitle='(Teaser)'
				/>
			</Videos>
		</VideoSection>

		<PodcastSection>
			<Typography
				variant='h2'
				color='primary'
				style={{ marginBottom: '50px', fontSize: '32px' }}
			>
				PODCASTS
			</Typography>
			<Podcasts>
				<Podcast
					img='/patricia-podcast-1.png'
					title='T1 E19: Propósito e realização'
					subtitle='Patricia Furtado'
					participation='Com Éder Monteiro'
				/>
				<Podcast
					img='/patricia-podcast-2.png'
					title='UM OCEANO DE MEMÓRIAS'
					subtitle='Especial Água - Sob a perspectiva delas'
					participation='Com Mariana Godoy'
				/>
				<Podcast
					img='/patricia-podcast-3.png'
					title='BEE MY GUEST'
					participation='Com Cláudia Penteado'
				/>
			</Podcasts>
		</PodcastSection>

		<PerformerSection>
			<Typography
				variant='h2'
				color='primary'
				style={{ fontSize: '28px' }}
			>
				Patricia atuando como Performer Subaquática
			</Typography>
			<Performers>
				<img src='/patricia-performer-1.png' />
				<img src='/patricia-performer-2.png' />
				<img src='/patricia-performer-3.png' />
			</Performers>
			<Typography>Fotógrafia: Ary Amarante</Typography>
		</PerformerSection>
	</Box>
);
