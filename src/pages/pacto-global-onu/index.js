import { Box, Grid, Typography } from "@mui/material";
import { Head } from "../../components/head";
import { PersonQuoteCard } from "../../components/person-quote-card";
import { ObjetivosContainer, LinksContainer } from "./styles";

export const PactoGlobalONU = () => (<Box>
    <Head
        breadcrumbs={[ { url: '/', name: 'Home' }, { url: '/acqua-mater', name: 'Acqua Mater' } ]} 
        title="Acqua Mater & Pacto Global da ONU"
        backgroundImage="default-head-bg.png"
    />
    <Box my="100px" width="70%" mx="auto">
        <Grid container spacing={2} mb="50px">
            <Grid item md={6}>imagem aqui</Grid>
            <Grid item md={6}>
                <Typography variant="body1" textAlign="end">A fundadora e CEO da Acqua Mater, Patricia Furtado, começou a trabalhar pelas 8 Metas do Milênio e pela difusão dos princípios do Pacto Global da ONU em 2006, quando era Especialista em Responsabilidade Social da Ampla (atual Enel Energia), coordenando projetos socioculturais da empresa e redigindo seu Relatório de Sustentabilidade, já no modelo GRI (Global Reporting Initiative). Quando fundou a Acqua Mater,envolveu-se imediatamente com as ações do Pacto Global da ONU Brasil, principalmente as promovidas pela Plataforma Ação pela Água e Oceano, da qual é integrante desde 2019.</Typography>
            </Grid>            
        </Grid>

        <Typography variant="body1">Em 2021, A Acqua Mater tornou-se signatária do Global Compact e Patricia Furtado foi reconhecida como "Profissional de ImPacto" do Pacto Global da ONU Brasil.</Typography>

        <Grid container spacing={2} my="50px">
            <Grid item md={6}>imagem aqui</Grid>
            <Grid item md={6}>
                <Typography variant="body1">Em 2022, envolveu-se com mais três projetos coordenados pela plataforma Ação pela Água e Oceano do Pacto Global da ONU Brasil: tornou-se signatária do "Pacto pela Resiliência Hídrica" e do "Movimento + Água", além de passar a integrar o Projeto "Blue Keepers", voltado à despoluição marinha. <br /> <br /> Ainda em 2022, torna-se signatária dos "Princípios do Oceano Sustentável" (Sustainable Ocean Principles), iniciativa da "Coalizão pela Governança do Oceano" (Ocean Stewardship Coalition) do Pacto Global da ONU.</Typography>
            </Grid> 
        </Grid>

        <Box my="50px">
            <PersonQuoteCard
                horizontal
                quote='"Conectar ODS, especialmente o 6, o 14 e o 17, é de fundamental importância para prevenir os caminhos do lixo para o mar, e a Acqua Mater enfrenta esse desafio com consistência e comprometimento. Trazer a pauta OCEANO para o ambiente corporativo é palavra de ordem na atualidade!"'
                personImg="quem-pensa-faz/people/gabriela-otero.png"
                name="Gabriela Otero"
                description="Coordenadora do Blue Keepers, projeto do Pacto Global Brasil"
            />
        </Box>

    </Box>
    <ObjetivosContainer>
        <Box width="70%">
            <Typography variant="h2" color="white" mb="20px">ACQUA MATER & OS OBJETIVOS DO DESENVOLVIMENTO SUSTENTÁVEL DA ONU (ODS)</Typography>
            <Typography variant="body1" color="white">A Acqua Mater também promove o avanço dos 17 ODS da Agenda 2030 da ONU, mas com foco no diálogo entre o ODS 6 (Água & Saneamento) e o ODS 14 (Oceano), sem excluir sua relação com o ODS 13 (Ação Climática). Ela faz isso, principalmente, por meio dos ODS 4 (Educação) e do ODS 17 (Parcerias).
            <br /> <br />
            Por isso, esses são os 5 principais ODS na estratégia da organização:
            </Typography>
        </Box>
        <Box display="flex" mt="30px" justifyContent="space-between" width="800px">
            <img src="white-placeholder.png" alt="ODS6" width="150px"/>
            <img src="white-placeholder.png" alt="ODS6" width="150px" />
            <img src="white-placeholder.png" alt="ODS6" width="150px" />
            <img src="white-placeholder.png" alt="ODS6" width="150px" />
            <img src="white-placeholder.png" alt="ODS6" width="150px" />
        </Box>
    </ObjetivosContainer>
    <LinksContainer>
        <Typography variant="body1">
            <b>Global Compact: </b>
            <a rel="noreferrer" target="_blank" href="https://www.unglobalcompact.org">https://www.unglobalcompact.org</a>
        </Typography>
        <Typography variant="body1">
            <b>Pacto Global da ONU Brasil </b>
            <a rel="noreferrer" target="_blank" href="https://www.pactoglobal.org.br">https://www.pactoglobal.org.br</a>
        </Typography>
        <Typography variant="body1">
            <b>Plataforma Ação pela Água e Oceano: </b>
            <a rel="noreferrer" target="_blank" href="https://www.pactoglobal.org.br/plataformas-de-acao/acao-pela-agua">https://www.pactoglobal.org.br/plataformas-de-acao/acao-pela-agua</a>
        </Typography>
        <Typography variant="body1">
            <b>Projeto Blue Keepers: </b>
            <a rel="noreferrer" target="_blank" href="https://www.bluekeepers.org">https://www.bluekeepers.org</a>
        </Typography>
        <Typography variant="body1">
            <b>Movimento + Água: </b>
            <a rel="noreferrer" target="_blank" href="https://www.pactoglobal.org.br/movimento/maisagua/#sobre">https://www.pactoglobal.org.br/movimento/maisagua/#sobre</a>
        </Typography>
        <Typography variant="body1">
            <b>Ocean Stewardship Coalition: </b>
            <a rel="noreferrer" target="_blank" href="https://www.unglobalcompact.org/take-action/ocean">https://www.unglobalcompact.org/take-action/ocean</a>
        </Typography>

        <Box display="flex" mt="30px" justifyContent="space-between" width="700px">
            <img src="white-placeholder.png" alt="ODS6" width="150px"/>
            <img src="white-placeholder.png" alt="ODS6" width="150px" />
            <img src="white-placeholder.png" alt="ODS6" width="150px" />
            <img src="white-placeholder.png" alt="ODS6" width="150px" />
        </Box>
    </LinksContainer>
</Box>);