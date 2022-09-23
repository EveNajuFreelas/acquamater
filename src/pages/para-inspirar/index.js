import { Box, Container } from "@mui/material";
import { Head } from "../../components/head";
import { ParaLer, ParaOuvir, ParaVer } from "../../utils/para-inspirar-items";
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
                {ParaVer.map((value, index) => (
                    <InspirarItem 
                        key={index}
                        img={value.imagem}
                        date={value.data}
                        author={value.autor}
                        name={value.nome}
                        link={value.link}
                    />
                ))}
            </Container>


            <InspirarHeader 
                sectionName="PARA LER"
                subtitle="Textos, artigos"
                img="/para-inspirar/para-ler-icon.png"
                hasTopDivider
            />

            <Container ml="20%">
                {ParaLer.map((value, index) => (
                    <InspirarItem 
                        key={index}
                        img={value.imagem}
                        date={value.data}
                        author={value.autor}
                        name={value.nome}
                        link={value.link}
                    />
                ))}
            </Container>

            <InspirarHeader 
                sectionName="PARA OUVIR"
                subtitle="Podcasts, música"
                img="/para-inspirar/para-ouvir-icon.png"
                hasTopDivider
            />

            <Container ml="20%" mb="50px">
                {ParaOuvir.map((value, index) => (
                    <InspirarItem 
                        img={value.imagem}
                        date={value.data}
                        author={value.autor}
                        name={value.nome}
                        link={value.link}
                    />
                ))}
            </Container>

        </BoxContainer>
    </Box>
);