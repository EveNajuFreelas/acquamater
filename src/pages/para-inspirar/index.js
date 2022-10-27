import { Box, Container } from '@mui/material';
import { Head } from '../../components/head';
import { ParaLer, ParaOuvir, ParaVer } from '../../utils/para-inspirar-items';
import { Wrapper } from '../styles';
import { InspirarHeader } from './inspirar-header';
import { InspirarItem } from './inspirar-item';
import { BoxContainer } from './styles';

export const ParaInspirar = () => (
	<Box mb='50px'>
		<Head
			breadcrumbs={[{ url: '/acquamater', name: 'Home' }]}
			title='Para Inspirar'
			backgroundImage='/acquamater/default-head-bg.png'
		/>

		<BoxContainer>
			<Wrapper>
				<InspirarHeader
					sectionName='PARA VER'
					subtitle='Vídeos, filmes'
					img='/acquamater/para-inspirar/para-ver-icon.png'
				/>

				<Container style={{ padding: '0 0.5% 0 12%' }}>
					{ParaVer.map((value, index) => (
						<InspirarItem
							key={index}
							img={`/acquamater${value.imagem}`}
							date={value.data}
							author={value.autor}
							name={value.nome}
							link={value.link}
						/>
					))}
				</Container>

				<InspirarHeader
					sectionName='PARA LER'
					subtitle='Textos, artigos'
					img='/acquamater/para-inspirar/para-ler-icon.png'
					hasTopDivider
				/>

				<Container style={{ padding: '0 0.5% 0 12%' }}>
					{ParaLer.map((value, index) => (
						<InspirarItem
							key={index}
							img={`/acquamater${value.imagem}`}
							date={value.data}
							author={value.autor}
							name={value.nome}
							link={value.link}
						/>
					))}
				</Container>

				<InspirarHeader
					sectionName='PARA OUVIR'
					subtitle='Podcasts, música'
					img='/acquamater/para-inspirar/para-ouvir-icon.png'
					hasTopDivider
				/>

				<Container style={{ padding: '0 0.5% 0 12%' }}>
					{ParaOuvir.map((value, index) => (
						<InspirarItem
							img={`/acquamater${value.imagem}`}
							date={value.data}
							author={value.autor}
							name={value.nome}
							link={value.link}
						/>
					))}
				</Container>
			</Wrapper>
		</BoxContainer>
	</Box>
);
