import { Head } from '../../components/head';
import { Box, Grid, Typography } from "@mui/material";
import BoxGray from '../../components/BoxGray';
import { colors } from '../../theme/colors';
import { PersonQuoteCard } from '../../components/person-quote-card';

export const NossaHistoria = () => {
    return (
        <Box>
            <Head
                breadcrumbs={[ { url: '/', name: 'Home' }, { url: '/acqua-mater', name: 'Acqua Mater' } ]} 
                title="Nossa História"
                backgroundImage="/acquamater/default-head-bg.png"
            >
                <Typography variant='body1' color="white">
                    A missão da Acqua Mater é ambiciosa, pois se propõe a ser um agente de mudanças que oferece soluções inovadoras e criativas para promover a saúde e a vida sob as esferas pessoal, social e ambiental, sempre tendo as Águas e o Oceano como ponto de partida, e também de chegada.
                </Typography>
            </Head>

            <Grid container pt="100px" pb="20px" mx="auto" spacing={2} justifyContent="center" display="flex">
                <Grid item md={4}>
                    <Typography variant="body1">Por isso, a Acqua Mater nasce de um propósito de vida que é também Missão: retribuir o que as Águas e o Oceano sempre lhe proporcionaram. Para isso, convida pessoas e organizações a se reconectarem com as origens da vida e a cuidarem de todas as águas, inspirando-se no velho ditado: "quem ama, cuida".
                    <br/> <br/>
                    Os primeiros anos confirmaram que a decisão fora acertada, principalmente diante das urgências socioambientais planetárias: escassez hídrica, poluição de rios e mares, crise climática etc. Mas também diante da desconexão do ser humano da natureza, acentuada tanto pelas demandas do cotidiano urbano quanto da vida online, sobretudo após a pandemia.
                    </Typography>
                </Grid>
                <Grid item md={4}>
                    <Typography variant="body1">A missão da Acqua Mater é ambiciosa, pois se propõe a ser um agente de mudanças que oferece soluções inovadoras e criativas para promover saúde e a vida sob as esferas pessoal, social e ambiental, sempre tendo as Águas e o Oceano como ponto de partida, e também de chegada.
                    <br/> <br />
                    Como diz Eduardo Galeano, "a utopia nos faz avançar". O futuro não é consequência só do passado, mas também do presente. E do que cada um de nós faz com o presente da vida nas mãos.
                    </Typography>
                </Grid>
            </Grid>
            <Box textAlign="center" width="80%" marginX="auto" marginY="50px">
                <BoxGray waterMark dense>
                    <Typography variant="h2" color={colors.blueLighter}>O NOME</Typography>
                    <Typography variant="body1bold" mt="15px">Acqua Mater {`<>`} Água Mãe</Typography>
                    <Typography variant="body1">A escrita correta em latim seria Aqua Mater. A introdução da letra "c" é uma "licença poética", homenagem à escrita da palavra "água" em italiano, pois foi na Itália que sua fundadora, Patrícia Furtado, iniciou seus estudos sobre as Memórias da Água e as nossas Memórias Marinhas.</Typography>
                </BoxGray>
            </Box>
            <Box width="80%" marginX="auto" marginY="50px">
                <img width="100%" src="/acquamater/other-acquamater-logos.png" alt="Acqua Mater logos" />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
                <PersonQuoteCard 
                    quote='"Os projetos da Acqua Mater produzem um resultado extremamente potente e raro por fazerem convergir o olhar humano, técnico e artístico sobre a água."'
                    personImg="/acquamater/quem-pensa-faz/people/dawn-fleming.png"
                    name="Dawn Fleming"
                    extraContent={<Typography variant="body1">Canadá / Brasil</Typography>}
                    description="Diretora do Water Innovation Lab Brasil / WIL BRASIL"
                />
                <PersonQuoteCard 
                    quote='"Patrícia Furtado é uma inspiração e uma Empoderadora Mulher Global, porque suas ações inspiram outras pessoas a sonhar mais, aprender mais, fazer mais e se tornar mais. Ela é uma verdadeira líder!"'
                    personImg="/acquamater/quem-pensa-faz/people/anais-barclay.png"
                    name="Anais Barclay"
                    extraContent={<Typography variant="body1">Laos / Hong Kong</Typography>}
                    description="Fundadora da BubblyStarzs & CEO da MEDRadiance Organization"
                />
            </Box>
        </Box>
    )
};
