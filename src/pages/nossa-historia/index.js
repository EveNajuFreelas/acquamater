import { Head } from '../../components/head';
import { Box, Grid, Typography } from '@mui/material';
import BoxGray from '../../components/BoxGray';
import { colors } from '../../theme/colors';
import { PersonQuoteCard } from '../../components/person-quote-card';
import { Wrapper } from '../styles';
import { useState } from 'react';

export const NossaHistoria = () => {
	const fullDawnText =
		"'Os projetos da Acqua Mater produzem um resultado extremamente potente e raro por fazerem convergir o olhar humano, técnico e artístico sobre a água. A parceria entre a Acqua Mater e a Waterlution começou em 2018, e todas as vivências que coproduzimos (Palestras, Mentorias, Facilitações na Água) foram de alta qualidade e de efeito transformador para os participantes, ressoando em todos ainda hoje. Que nossa parceria continue por muitos anos ainda!'";

	const smallDawnText =
		"'Os projetos da Acqua Mater produzem um resultado extremamente potente e raro por fazerem convergir o olhar humano, técnico e artístico sobre a água.'";

	const [text, setText] = useState(smallDawnText);

	const expandText = () => {
		setText(curr => {
			if (curr === fullDawnText) {
				return smallDawnText;
			} else {
				return fullDawnText;
			}
		});
	};
	return (
		<Box>
			<Head
				breadcrumbs={[
					{ url: '/acquamater', name: 'Home' },
					{ url: '/acquamater', name: 'Acqua Mater' },
				]}
				title='Nossa História'
				backgroundImage='/acquamater/default-head-bg.png'
			>
				<Typography variant='body2' color='white'>
					A missão da Acqua Mater é ambiciosa, pois se propõe a ser um
					agente de mudanças que oferece soluções inovadoras e
					criativas para promover a saúde e a vida sob as esferas
					pessoal, social e ambiental, sempre tendo as Águas e o
					Oceano como ponto de partida, e também de chegada.
				</Typography>
			</Head>

			<Wrapper>
				<Grid
					container
					pt='100px'
					pb='100px'
					maxWidth="1024px"
					mx='auto'
					justifyContent='space-between'
					spacing={3}
				>
					<Grid item md={5.5}>
						<Typography variant='body1'>
							Por isso, a Acqua Mater nasce de um propósito de
							vida que é também Missão: retribuir o que as Águas e
							o Oceano sempre lhe proporcionaram. Para isso,
							convida pessoas e organizações a se reconectarem com
							as origens da vida e a cuidarem de todas as águas,
							inspirando-se no velho ditado: "quem ama, cuida".
							<br /> <br />
							Os primeiros anos confirmaram que a decisão fora
							acertada, principalmente diante das urgências
							socioambientais planetárias: escassez hídrica,
							poluição de rios e mares, crise climática etc. Mas
							também diante da desconexão do ser humano da
							natureza, acentuada tanto pelas demandas do
							cotidiano urbano quanto da vida online, sobretudo
							após a pandemia.
						</Typography>
					</Grid>
					<Grid item md={5.5}>
						<Typography variant='body1'>
							A missão da Acqua Mater é ambiciosa, pois se propõe
							a ser um agente de mudanças que oferece soluções
							inovadoras e criativas para promover saúde e a vida
							sob as esferas pessoal, social e ambiental, sempre
							tendo as Águas e o Oceano como ponto de partida, e
							também de chegada.
							<br /> <br />
							Como diz Eduardo Galeano, "a utopia nos faz
							avançar". O futuro não é consequência só do passado,
							mas também do presente. E do que cada um de nós faz
							com o presente da vida nas mãos.
						</Typography>
					</Grid>
				</Grid>

				<BoxGray waterMark dense center>
					<Typography variant='h2' color={colors.blueLighter}>
						O NOME
					</Typography>
					<Typography variant='body1bold' mt='15px'>
						Acqua Mater {`<>`} Água Mãe
					</Typography>
					<Typography variant='body1'>
						A escrita correta em latim seria Aqua Mater. A
						introdução da letra "c" é uma "licença poética",
						homenagem à escrita da palavra "água" em italiano, pois
						foi na Itália que sua fundadora, Patrícia Furtado,
						iniciou seus estudos sobre as Memórias da Água e as
						nossas Memórias Marinhas.
					</Typography>
				</BoxGray>

				<Box width='80%' marginX='auto' marginY='50px'>
					<img
						width='100%'
						src='/acquamater/other-acquamater-logos.png'
						alt='Acqua Mater logos'
					/>
				</Box>
				<Box display='flex' alignItems='start' justifyContent='center'>
					<PersonQuoteCard
						quote={text}
						personImg='/acquamater/quem-pensa-faz/people/dawn-fleming.png'
						name='Dawn Fleming'
						extraContent={
							<Typography variant='body1' color={colors.blueLighter}>
								Canadá / Brasil
							</Typography>
						}
						description='Diretora do Water Innovation Lab Brasil / WIL BRASIL'
						seeMoreButton={expandText}
						isTextExpanded={text === fullDawnText}
					/>
					<PersonQuoteCard
						quote='"Patrícia Furtado é uma inspiração e uma Empoderadora Mulher Global, porque suas ações inspiram outras pessoas a sonhar mais, aprender mais, fazer mais e se tornar mais. Ela é uma verdadeira líder!"'
						personImg='/acquamater/quem-pensa-faz/people/anais-barclay.png'
						name='Anais Barclay'
						extraContent={
							<Typography variant='body1' color={colors.blueLighter}>
								Laos / Hong Kong
							</Typography>
						}
						description='Fundadora da BubblyStarzs & CEO da MEDRadiance Organization'
					/>
				</Box>
			</Wrapper>
		</Box>
	);
};
