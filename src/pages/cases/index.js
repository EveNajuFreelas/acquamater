import { Box, Grid, Typography } from "@mui/material";
import { CaseCard } from "../../components/case-card";
import { Head } from "../../components/head";
import { colors } from "../../theme/colors";
import { BrasilCases, WorldCases } from "../../utils/cases";
import { MundoContainer } from "./styles";

export const Cases = () => {

    const baixarPDFCase = (place, caseIndex) => {
        //window.open(place === 'br' ? BrasilCases[caseIndex] : WorldCases[caseIndex]);
    }

    return (<Box>
        <Head
            breadcrumbs={[ { url: '/', name: 'Home'} ]}
            title="Cases"
            backgroundImage="/acquamater/default-head-bg.png"
        >
            <Typography variant="body1" color="white">
                Desde 2017, ano de sua fundação, a Acqua Mater tem sido convidada a colaborar com os mais variados parceiros, no Brasil e no exterior, para promover <br/>
                “Uma Nova Cultura da Água”, <br/>
                a “Cultura Oceanica” <br/>
                o “Dialogo entre o ODS 6e o ODS 14" <br/>
                a “Reconexao de Pessoas e Organizacdées com o Mundo ÁGUA-OCEANO”.
            </Typography>
        </Head>

        <Box textAlign="center" mt="100px" mb="50px" mx="10%">
            <Typography variant="h2" color={colors.blueLighter}>NO BRASIL</Typography>

            <Grid container spacing={2} mt="40px" minHeight="480px">
                {BrasilCases.map(({ image, project, client, where, when }, index) => (
                    <Grid 
                        item 
                        xs={1} 
                        sm={2} 
                        md={4} 
                        borderBottom={`1px ${colors.blueLighter} solid`}
                        padding="10px"
                        key={`case-${index}`}
                    >
                    <CaseCard
                        coverImg={`/acquamater${image}`}
                        project={project}
                        client={client}
                        where={where}
                        when={when}
                        saibaMaisFunction={() => baixarPDFCase('br', index)}
                    />
                </Grid>
                ))}
            </Grid>
        </Box>
        <MundoContainer>
            <Typography variant="h2" color={colors.blueLighter}>NO MUNDO</Typography>
            <Grid container spacing={2} mt="40px" minHeight="480px">
                {WorldCases.map(({ image, project, client, where, when }, index) => (
                    <Grid 
                        item 
                        xs={1} 
                        sm={2} 
                        md={4} 
                        borderBottom={`1px ${colors.blueLighter} solid`}
                        padding="10px"
                        key={`case-${index}`}
                    >
                    <CaseCard
                        coverImg={`/acquamater${image}`}
                        project={project}
                        client={client}
                        where={where}
                        when={when}
                        saibaMaisFunction={() => baixarPDFCase('ww', index)}
                    />
                </Grid>
                ))}
            </Grid>
        </MundoContainer>
    </Box>);
};