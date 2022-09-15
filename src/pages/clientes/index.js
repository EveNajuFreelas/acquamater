import { Button, Divider, Grid, Typography } from "@mui/material";
import { Head } from "../../components/head";
import { colors } from "../../theme/colors";
import { ParceiroImg, ParceirosContainer } from "../quem-pensa-e-faz/styles";

export const Clientes = () => (
    <>
        <Head
            breadcrumbs={[
                { url: '/',
                name: 'Home' }
            ]}
            title="Clientes"
            backgroundImage="default-head-bg.png"
        />
            
        <ParceirosContainer>
            <Typography variant="body1">São organizações que desenvolvem soluções e tecnologias inovadoras voltadas à Conservação, à Regeneração e à Sustentabilidade de todos os ecossistemas aquáticos, assim como projetos de sensibilização para nossa reconexão com o Mundo ÁGUA-OCEANO.</Typography>

            <Typography variant="h1" color={colors.blueLighter} paddingY="20px">NO MUNDO</Typography>
            <Grid container spacing={2} marginBottom={2}>
                {Array.from(Array(10)).map(a => ( 
                    <ParceiroImg src="white-placeholder.png" />
                ))}
            </Grid>
            <Button>Conheça Todos</Button>

            <Divider width="80%" sx={{ marginTop: '30px' }} />

            <Typography variant="h1" color={colors.blueLighter} paddingY="20px">NO BRASIL</Typography>
            <Grid container spacing={2} marginBottom={2}>
                {Array.from(Array(10)).map(a => ( 
                    <ParceiroImg src="white-placeholder.png" />
                ))}
            </Grid>
            <Button>Conheça Todos</Button>

        </ParceirosContainer>
    </>
)