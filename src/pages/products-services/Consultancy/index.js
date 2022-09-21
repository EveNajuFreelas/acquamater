import { Typography } from '@mui/material';
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
	ContainerColumn2,
	ListConsultancy,
} from './styles';
import { Wrapper } from '../../styles';
import BoxGray from '../../../components/BoxGray';
import { colors } from '../../../theme/colors';

const Training = () => {
	const list = [
		'Tratamento da Água em Áreas Rurais utilizando luz solar;',
		'Banheiros Secos e Ecológicos: muito funcionais para áreas rurais;',
		'Lavatórios para higienização das mãos em lugares públicos;',
		'Construção de banheiros secos para populações vulneráveis;',
		'Construção de Microssistemas de Águas para comunidades próximas ao Rio Amazonas;',
		'Tratamento de Águas Cinzas e Águas de Reúso;',
		'Aproveitamento e Manejo de Água de Chuva;',
		'Construção de Jardins de Chuva;',
		'Construção de Jardins Funcionais Urbanos, em Casas e Apartamentos;',
		'Despoluição de Corpos Hídricos Naturais;',
		'Projetos de Agrofloresta / Permacultura.',
	];

	return (
		<>
			<HeadPage image='head-consultancy.png' noMargin>
				<ContainerTextSingle maxWidth='lg'>
					<Typography variant='subtitle1' sx={{ color: '#fff' }}>
						Oferecemos Consultorias de{' '}
						<strong>Conteúdo de Curadoria</strong> e de{' '}
						<strong>Soluções Integradas</strong> para ajudar pessoas
						e organizações a adquirirem uma visão 360o do Mundo
						ÁGUA-OCEANO e para encontrar soluções que gerem mais
						saúde e mais vida em nosso planeta.
					</Typography>
				</ContainerTextSingle>
			</HeadPage>
			<ContainerTitle color='#037D92'>
				<Title maxWidth='lg'>Consultoria</Title>
			</ContainerTitle>
			<Wrapper>
				<ColumnTextImage
					image={{ isBg: false, img: 'Consultancy-first.png' }}
					title='de conteúdo'
					reverse
				>
					A Acqua Mater desenvolve conteúdo para projetos artísticos,
					pedagógicos e ambientais que buscam uma visão
					transdisciplinar e precisam aprofundar conhecimentos ligados
					ao Mundo ÁGUA-OCEANO tendo como referência conhecimentos
					tradicionais e as ciências humanas, sociais e naturais.
				</ColumnTextImage>
			</Wrapper>

			<ColumnTextImage
				image={{ isBg: true, img: 'Consultancy-second-bg.png' }}
				title=''
				invertedColors
				noDivision
			>
				<Wrapper>
					<ContainerColumn2>
						<img src='Consultancy-second.png'></img>
						<div>
							<Typography variant='h1' color='white'>
								DE CURADORIA
							</Typography>
							<br />
							<Typography color='white'>
								Quer realizar uma Exposição, uma Mostra ou um
								Festival que abrace temas ligados ao mundo
								ÁGUA-OCEANO segundo abordagens artísticas e/ou
								pedagógicas e/ou culturais e/ou científicas e/ou
								sociais e/ou ambientais? A Acqua Mater ajuda
								você a organizar um evento criativo e único!
								<br />
								<br />
								Neste momento, a Acqua Mater está fazendo a
								Curadoria do “Festival do Oceano” que acontecerá
								em Fernando de Noronha em 2023, com produção da
								IMUA Escola do Mar.
								<br />
								Mais informações em breve!
							</Typography>
						</div>
					</ContainerColumn2>
				</Wrapper>
			</ColumnTextImage>

			<Wrapper style={{ marginTop: '50px' }}>
				<ColumnTextImage
					image={{ isBg: false, img: 'Consultancy-third.png' }}
					title='de soluções integradas'
					reverse
					noPadding
				>
					Oferecemos Soluções Integradas para que indivíduos,
					comunidades e empreendimentos tenham melhor acesso à Água
					Potável & Saneamento, possam economizar água e cuidar de
					seus rios, lagos e mares.
				</ColumnTextImage>

				<div style={{ width: '100%', marginTop: '50px' }}>
					<BoxGray dense waterMark>
						<ContainerList>
							<FirstColumn>
								<Typography
									color={colors.blueLighter}
									fontWeight='bold'
									lineHeight='2'
								>
									Esses são alguns dos Produtos que oferecemos
									por meio de nossa ampla rede de Parceiros,
									presentes em diferentes estados do país:
								</Typography>
							</FirstColumn>
							<SecondColumn>
								<ListConsultancy>
									{list.map(item => (
										<li>
											<span>{item}</span>
										</li>
									))}
								</ListConsultancy>
							</SecondColumn>
						</ContainerList>
					</BoxGray>
				</div>
			</Wrapper>
		</>
	);
};

export default Training;
