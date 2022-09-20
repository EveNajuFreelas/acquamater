import { Head } from '../../components/head';
import { Box, Grid, Typography } from "@mui/material";
import BoxGray from '../../components/BoxGray';
import { colors } from '../../theme/colors';

export const NossaHistoria = () => {
    return (
        <Box>
            <Head
                breadcrumbs={[ { url: '/', name: 'Home' }, { url: '/acqua-mater', name: 'Acqua Mater' } ]} 
                title="Nossa História"
                backgroundImage="default-head-bg.png"
            >
                <Typography variant='body1' color="white">
                    A missão da Acqua Mater é ambiciosa, pois se propõe a ser um agente de mudanças que oferece soluções inovadoras e criativas para promover a saúde e a vida sob as esferas pessoal, social e ambiental, sempre tendo as Águas e o Oceano como ponto de partida, e também de chegada.
                </Typography>
            </Head>

            <Grid container pt="100px" pb="20px" mx="50px" spacing={2} justifyContent="center" display="flex">
                <Grid item xs={4}>
                    <Typography variant="body1">Por isso, a Acqua Mater nasce de um propósito de vida que é também Missão: retribuir o que as Águas e o Oceano sempre lhe proporcionaram. Para isso, convida pessoas e organizações a se reconectarem com as origens da vida e a cuidarem de todas as águas, inspirando-se no velho ditado: "quem ama, cuida".
                    <br/> <br/>
                    Os primeiros anos confirmaram que a decisão fora acertada, principalmente diante das urgências socioambientais planetárias: escassez hídrica, poluição de rios e mares, crise climática etc. Mas também diante da desconexão do ser humano da natureza, acentuada tanto pelas demandas do cotidiano urbano quanto da vida online, sobretudo após a pandemia.
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">A missão da Acqua Mater é ambiciosa, pois se propõe a ser um agente de mudanças que oferece soluções inovadoras e criativas para promover saúde e a vida sob as esferas pessoal, social e ambiental, sempre tendo as Águas e o Oceano como ponto de partida, e também de chegada.
                    <br/> <br />
                    Como diz Eduardo Galeano, "a utopia nos faz avançar". O futuro não é consequência só do passado, mas também do presente. E do que cada um de nós faz com o presente da vida nas mãos.
                    </Typography>
                </Grid>
            </Grid>
            <BoxGray>
                <Typography variant="h2" color={colors.blueLighter}>O NOME</Typography>
                <Typography variant="body1bold" mt="10px">Acqua Mater {`<>`} Água Mãe</Typography>
            </BoxGray>
        </Box>
    )
};
