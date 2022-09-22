import { Box, Container } from "@mui/material";
import { Head } from "../../components/head";
import { InspirarHeader } from "./inspirar-header";
import { InspirarItem } from "./inspirar-item";
import { BoxContainer } from "./styles";

export const ParaInspirar = () => (
    <Box>
        <Head 
            breadcrumbs={[
                { url: '/',
                name: 'Home' }
            ]}
            title="Para Inspirar"
            backgroundImage="/default-head-bg.png"
        />

        <BoxContainer px="10%">
            <InspirarHeader 
                sectionName="PARA VER"
                subtitle="Vídeos, filmes"
                img="/para-inspirar/para-ver-icon.png"
            />

            <Container ml="20%">
                <InspirarItem 
                    img="/para-inspirar/science-icon.png"
                    date="10 / 10 / 2022"
                    author="Fulano"
                    name="Namenamenamenamenamenamenamename"
                />
                <InspirarItem 
                    img="/para-inspirar/science-icon.png"
                    date="10 / 10 / 2022"
                    author="Fulano"
                    name="Namenamenamenamenamenamenamename"
                />
                <InspirarItem 
                    img="/para-inspirar/science-icon.png"
                    date="10 / 10 / 2022"
                    author="Fulano"
                    name="Namenamenamenamenamenamenamename"
                />
                <InspirarItem 
                    img="/para-inspirar/science-icon.png"
                    date="10 / 10 / 2022"
                    author="Fulano"
                    name="Namenamenamenamenamenamenamename"
                />
                <InspirarItem 
                    img="/para-inspirar/science-icon.png"
                    date="10 / 10 / 2022"
                    author="Fulano"
                    name="Namenamenamenamenamenamenamename"
                />
            </Container>


            <InspirarHeader 
                sectionName="PARA LER"
                subtitle="Textos, artigos"
                img="/para-inspirar/para-ler-icon.png"
                hasTopDivider
            />

            <Container ml="20%">
                <InspirarItem 
                    img="/para-inspirar/science-icon.png"
                    date="10 / 10 / 2022"
                    author="Fulano"
                    name="Namenamenamenamenamenamenamename"
                />
                <InspirarItem 
                    img="/para-inspirar/science-icon.png"
                    date="10 / 10 / 2022"
                    author="Fulano"
                    name="Namenamenamenamenamenamenamename"
                />
                <InspirarItem 
                    img="/para-inspirar/science-icon.png"
                    date="10 / 10 / 2022"
                    author="Fulano"
                    name="Namenamenamenamenamenamenamename"
                />
                <InspirarItem 
                    img="/para-inspirar/science-icon.png"
                    date="10 / 10 / 2022"
                    author="Fulano"
                    name="Namenamenamenamenamenamenamename"
                />
                <InspirarItem 
                    img="/para-inspirar/science-icon.png"
                    date="10 / 10 / 2022"
                    author="Fulano"
                    name="Namenamenamenamenamenamenamename"
                />
            </Container>

            <InspirarHeader 
                sectionName="PARA OUVIR"
                subtitle="Podcasts, música"
                img="/para-inspirar/para-ouvir-icon.png"
                hasTopDivider
            />

            <Container ml="20%">
                <InspirarItem 
                    img="/para-inspirar/science-icon.png"
                    date="10 / 10 / 2022"
                    author="Fulano"
                    name="Namenamenamenamenamenamenamename"
                />
                <InspirarItem 
                    img="/para-inspirar/science-icon.png"
                    date="10 / 10 / 2022"
                    author="Fulano"
                    name="Namenamenamenamenamenamenamename"
                />
                <InspirarItem 
                    img="/para-inspirar/science-icon.png"
                    date="10 / 10 / 2022"
                    author="Fulano"
                    name="Namenamenamenamenamenamenamename"
                />
                <InspirarItem 
                    img="/para-inspirar/science-icon.png"
                    date="10 / 10 / 2022"
                    author="Fulano"
                    name="Namenamenamenamenamenamenamename"
                />
                <InspirarItem 
                    img="/para-inspirar/science-icon.png"
                    date="10 / 10 / 2022"
                    author="Fulano"
                    name="Namenamenamenamenamenamenamename"
                />
            </Container>

        </BoxContainer>
    </Box>
);