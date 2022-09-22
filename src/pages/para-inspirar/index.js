import { Box, Chip, Divider, Grid, Typography } from "@mui/material";
import { Head } from "../../components/head";
import { colors } from "../../theme/colors";
import { BoxContainer } from "./styles";

export const ParaInspirar = () => (
    <Box>
        <Head 
            breadcrumbs={[
                { url: '/',
                name: 'Home' }
            ]}
            title="Para Inspirar"
            backgroundImage="default-head-bg.png"
        />

        <BoxContainer px="10%">
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <img src="para-inspirar/para-ver-icon.png" alt="para-ver" width="100px" />
                </Grid>
                <Grid item xs={10} mx="30px">
                    <Box display="flex" mx="15px" alignItems="end">
                        <Typography variant="h3" color={colors.blueLighter} mr="10px">
                            PARA VER
                        </Typography>
                        <Typography variant="body1">Vídeos, filmes</Typography>
                    </Box>
                    <Divider variant="middle" w="100%" color="#7FC31B" />
                    <Box display="flex" mx="15px" my="10px">
                        <Chip label="Ciência, Pesquisa e Tecnologia" avatar={<img src="para-inspirar/science-icon.png" alt="Science" />} />
                        <Chip label="Relação, Conexão e Emoção" avatar={<img src="para-inspirar/heart-icon.png" alt="Heart" />} />
                    </Box>
                </Grid>
            </Grid>

            <Box my="40px">
                <Divider variant="middle" w="100%" color={colors.blueLighter} />
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <img src="para-inspirar/para-ler-icon.png" alt="para-ler" width="100px" />
                </Grid>

                <Grid item xs={10} mx="30px">
                    <Box display="flex" mx="15px" alignItems="end">
                        <Typography variant="h3" color={colors.blueLighter} mr="10px">
                            PARA LER
                        </Typography>
                        <Typography variant="body1">Textos, artigos</Typography>
                    </Box>
                    <Divider variant="middle" w="100%" color="#7FC31B" />
                    <Box display="flex" mx="15px" my="10px">
                        <Chip label="Ciência, Pesquisa e Tecnologia" avatar={<img src="para-inspirar/science-icon.png" alt="Science" />} />
                        <Chip label="Relação, Conexão e Emoção" avatar={<img src="para-inspirar/heart-icon.png" alt="Heart" />} />
                    </Box>
                </Grid>
            </Grid>

            <Box my="40px">
                <Divider variant="middle" w="100%" color={colors.blueLighter} />
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <img src="para-inspirar/para-ouvir-icon.png" alt="para-ouvir" width="100px" />
                </Grid>

                <Grid item xs={10} mx="30px">
                    <Box display="flex" mx="15px" alignItems="end">
                        <Typography variant="h3" color={colors.blueLighter} mr="10px">
                            PARA OUVIR
                        </Typography>
                        <Typography variant="body1">Podcasts, música</Typography>
                    </Box>
                    <Divider variant="middle" w="100%" color="#7FC31B" />
                    <Box display="flex" mx="15px" my="10px">
                        <Chip label="Ciência, Pesquisa e Tecnologia" avatar={<img src="para-inspirar/science-icon.png" alt="Science" />} />
                        <Chip label="Relação, Conexão e Emoção" avatar={<img src="para-inspirar/heart-icon.png" alt="Heart" />} />
                    </Box>
                </Grid>
            </Grid>
        </BoxContainer>
    </Box>
);