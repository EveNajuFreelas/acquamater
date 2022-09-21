import { Box, Grid, Typography } from "@mui/material";
import { Head } from "../../components/head";
import { CulturaOceanicaContainer } from "./style";

export const UNESCO = () => (
    <Box>
        <Head
            breadcrumbs={[ { url: '/', name: 'Home' }, { url: '/acqua-mater', name: 'Acqua Mater' } ]} 
            title="Acqua Mater & UNESCO"
            backgroundImage="default-head-bg.png"
        />

        <Box my="100px" width="70%" mx="auto">
            <Grid container spacing={2} mb="50px">
                <Grid item md={6}>
                    <img src="unesco-section-img.png" alt="UNESCO" width="100%" />
                </Grid>
                <Grid item md={6}>
                    <Typography variant="body1" textAlign="end">A UNESCO é uma agência da ONU fundada em 1945 e voltada para a Educação, a Ciência e a Cultura.
                    <br/><br/>
                    A Acqua Mater acredita que esses três âmbitos do saber são fundamentais para os projetos que desenvolve, inclusive no campo da Sustentabilidade. Ainda que, para a maioria, esta se baseie apenas no tripé Economia-Meio Ambiente-Sociedade – o famoso triple bottom line –há quem some a estes a dimensão da CULTURA, por considerá-la fundamental para o desenvolvimento sustentável. A UNESCO também apoia essa ideia.</Typography>
                </Grid>            
            </Grid>

            <Typography variant="body1">Em 1961, nasce a Comissão Oceanográfica Intergovernamental (COI) da UNESCO, para promover um maior conhecimento sobre o que o oceano representa para a humanidade e para toda a vida na Terra. </Typography>
        </Box>

        <CulturaOceanicaContainer>
        <br/><br/><br/><br/>
        </CulturaOceanicaContainer>
    </Box>
);