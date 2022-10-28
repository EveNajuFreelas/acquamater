import { Box, Typography, Grid } from '@mui/material';
import { Head } from '../../components/head';
import {
	GraphTooltip,
	InteractiveContainer,
	InteractiveGraph,
	GraphTooltipContainer,
} from './style';
import { colors } from '../../theme/colors';
import { BackgroundImage, Wrapper } from '../styles';
export const QuemSomos = () => {
	return (
	<Box overflow="hidden">
		<Head
			breadcrumbs={[
				{ url: '/acquamater', name: 'Home' },
				{ url: '/acquamater', name: 'Acqua Mater' },
			]}
			title='Quem somos'
			backgroundImage='/acquamater/default-head-bg.png'
		>
			<Typography variant="body2" color="white">
				Somos uma organização brasileira com atuação global que incentiva a
				geração de mais saúde e mais vida a partir do cuidado de todas as
				águas que circulam no planeta.
				<br />
				<br />
				Promovemos:
				<ul>
					<li>uma nova cultura da água;</li>
					<li>a cultura oceânica;</li>
					<li>o diálogo entre o ODS 6 e o ODS 14;</li>
					<li>
						a reconexão de indivíduos e coletivos com a Água e o Oceano
					</li>
				</ul>
			</Typography>
		</Head>

		<Wrapper style={{ paddingTop: '40px'}}>
			<InteractiveContainer>
				<Typography
					variant='body1'
					color={colors.blueLighter}
					fontWeight='bold'
				>
					Nossos projetos transdisciplinares são voltados à
					Conservação, à Regeneração e à Sustentabilidade de todos os
					organismos que habitam o Mundo ÁGUA-OCEANO.
				</Typography>

				<GraphTooltip
					title='Reconstituição de algo que foi destruido ou arruinado'
					mt='20px'
					divTitle='Regeneração'
				/>
				<InteractiveGraph
					src='/acquamater/quem-somos-graph.png'
					alt='Gráfico'
				/>
				<GraphTooltipContainer>
					<GraphTooltip
						placement='top'
						title='Estado do organismo que está em equilíbrio com o ambiente em que se encontra'
						divTitle='Conservação'
						bottomText
					/>
					<GraphTooltip
						placement='top'
						title='Capacidade de criar meios para suprir as necessidades básicas do presente sem afetar as gerações futuras'
						divTitle='Sustentabilidade'
						bottomText
					/>
				</GraphTooltipContainer>
			</InteractiveContainer>
		</Wrapper>

		<Box position="relative"  style={{ maxHeight: '100vh', display: 'flex', margin: 'auto' }}>
			<BackgroundImage src="/acquamater/quem-somos-quote-bg.png" alt="Question" />
			<Typography variant="h2lite" color="white" style={{ padding: '15% 0 20% 0'}}>
				Por que falamos em mundo ÁGUA-OCEANO?
			</Typography>
		</Box>

		<Grid container spacing={2} style={{ margin: '0 0 50px 0', position: 'relative'}}>
				<BackgroundImage src="/acquamater/quem-somos-crianca-agua-bg.png" alt="child" />
				<Grid item xs={12} md={6} style={{ paddingTop: '5%', paddingLeft: '15%' }}>
					<Typography variant="body1">
					Todas as águas que circulam em nosso planeta estão conectadas. Isso
					acontece desde quando elas vieram do espaço e deram origem ao oceano
					primordial. Por sua vez, dele saíram as águas que hoje integram o
					ciclo natural hídrico, que continua promovendo o transporte das
					águas entre mar, céu e terra, sob suas variadas formas. Essas águas
					naturais também se conectam às águas que foram “domesticadas” pelo
					ser humano, por meio de variados serviços de tratamento, transporte
					e saneamento que viabilizam a vida urbana e a produção dos inúmeros
					bens materiais que consumimos.
					<br />
					<br />
					Podemos afirmar que, desde sempre, é a mesma água que circula e
					permite a continuidade da vida na Terra, renovando-se, reciclando-se
					– inclusive, dentro de nós. Todos os ecossistemas aquáticos, de água
					doce e salgada, estão interligados entre si e também com os vários
					fatores que regem o “ciclo natural” e o “ciclo artificial” das
					águas. Basta lembrar que da natureza tiramos as águas que usamos e
					para ela as devolvemos.
					<br />
					<br />
					</Typography>
					<Typography variant="body1" color={colors.blueLighter}>
						Portanto, cada gota de água em terra é filha do mar. De lá ela
						vem. E para lá, um dia, ela volta.
					</Typography>
					<br />
					<Typography variant="body1">
						Não podemos nos esquecer de que aproximadamente 80% da poluição
						marinha tem sua origem em terra. É cuidando de todas as águas que
						podemos, também, cuidar da água do mar.
						<br />
						<br />
					</Typography>
					<Box>
						<img src="/acquamater/ods-6-14.png" alt="ODSs" width="80%" />
					</Box>
				</Grid>
				<Grid item xs={12} md={6} />
			</Grid>
		<img alt='Água' src='/acquamater/quem-somos-bottom.png' style={{ margin: '0 0 -5px -1px', width: '100%' }} />
	</Box>
)};
