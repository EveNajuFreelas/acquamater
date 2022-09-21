import { Box, Grid, Typography } from "@mui/material";
import { CaseCard } from "../../components/case-card";
import { Head } from "../../components/head";
import { colors } from "../../theme/colors";

export const Cases = () => {

    return (<Box>
        <Head
            breadcrumbs={[ { url: '/home', name: 'Home'} ]}
            title="Cases"
            backgroundImage="default-head-bg.png"
        >
            <Typography variant="body1" color="white">
                Desde 2017, ano de sua fundacao, a Acqua Mater tem sido convidada a colaborar com os mais variados parceiros, no Brasil e no exterior, para promover <br/>
                “Uma Nova Cultura da Água”, <br/>
                a “Cultura Oceanica” <br/>
                o “Dialogo entre o ODS 6e o ODS 14" <br/>
                a “Reconexao de Pessoas e Organizacdées com o Mundo ÁGUA-OCEANO”.
            </Typography>
        </Head>

        <Box textAlign="center" mt="100px" mb="50px">
            <Typography variant="h2" color={colors.blueLighter}>NO BRASIL</Typography>

            <Grid container spacing={2}>
                <Grid item md={3}>
                    <CaseCard
                        coverImg=""
                        project="projetito"
                        client="clientito"
                        where="onde"
                        when="quando"
                    />
                </Grid>
            </Grid>
        </Box>

    </Box>);
};