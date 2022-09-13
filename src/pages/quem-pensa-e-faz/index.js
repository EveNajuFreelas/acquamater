import { Box, Button, Container, Link, Typography, Divider, Grid } from "@mui/material";
import { 
    AdvisoryBoardSectionContainer,
    SectionBlueTitle,
    HeadBreadcrumbs, 
    HeadContainer, 
    OrgSectionContainer, 
    TextOrganism,
    PeopleContainer,
    ParceirosContainer,
    ParceiroImg
} from "./styles";
import { colors } from '../../theme/colors';
import ColumnTextImage from '../../components/ColumnTextImage';
import { PersonCard } from "../../components/person-card";

export const QuemPensaFaz = () => {
    return (
        <Box>
            <HeadContainer>
                <Container>
                    <HeadBreadcrumbs>
                        <Link underline="hover" color="inherit" href="/">Home</Link>
                        <Link underline="hover" color="inherit" href="/acqua-mater">Acqua Mater</Link>
                        <Typography color="white">Quem Pensa e Faz</Typography>
                    </HeadBreadcrumbs>

                    <Typography variant="h1" color="white">QUEM PENSA E FAZ</Typography>
                </Container>
            </HeadContainer>
            <OrgSectionContainer>
                <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <TextOrganism variant="body1" color="primary.main">
                        Funcionamos como um organismo multicelular, composto de várias células, que são PESSOAS e ORGANIZAÇÕES com as quais trocamos ideias, idealizamos e realizamos projetos, potencializados por meio da cooperação e da diversidade cultural que caracteriza nossos parceiros, com os quais compartilhamos valores e objetivos.
                    </TextOrganism>
                    <img src="quem-pensa-faz/quem-pensa-faz-grafico.png" alt="gráfico" width="400px" />
                </Container>
            </OrgSectionContainer>
            <ColumnTextImage
                title="Patrícia Furtado de Mendonça"
                image={{ isBg: false, img: 'patricia-furtado-2.png' }}
                buttons={[{ url: '/quem-pensa-e-faz', title: "Saiba Mais"}]}
            >
                - Brasileira e Italiana, Empreendedora, Palestrante Inspiracional / Storyteller, Defensora do Oceano e das Águas, Facilitadora de Experiências de Reconexão com a Água e com o Oceano, Mergulhadora;
                <br />
                - "Profissional de ImPacto" da Rede Brasil do Pacto Global da ONU;
                <br />
                - Co-líder do Componente "Treinamento" do OLWA (Ocean Literacy With All), programa coordenado pela COI-UNESCO e endossado pela Década do Oceano da ONU;
                <br />
                - Coordenadora-Brasil da RELATO (Red de Educación Latino Americana para el Océano);
                <br />
                - Mentora e Conselheira de várias organizações internacionais voltada para jovens, como Waterlution, Sustainable Ocean Alliance, UNFCCC YOUNGO Ocean's Voice, entre outras
            </ColumnTextImage>
            <AdvisoryBoardSectionContainer>
                <SectionBlueTitle variant="h1">ADVISORY BOARD</SectionBlueTitle>
                <Typography variant="body1">Formado em sua maioria por empreendedores, pesquisadores e especialistas em temas ligados ao Mundo ÁGUA-OCEANO, com os quais a Acqua Mater colabora e/ou nos quais confia para definir importantes diretrizes de seus projetos.</Typography>
                
                <Typography variant="h1" color={colors.blueLighter} paddingY="20px">NO MUNDO</Typography>
                <PeopleContainer>
                    <PersonCard
                        name="Francesca Santoro"
                        img="quem-pensa-faz/people/francesca-santoro.png"
                        country="Itália"
                        description="Responsável Cultura Oceânica da COI-UNESCO"
                    />
                    <PersonCard 
                        name="Wenche Grønbrekk"
                        img="quem-pensa-faz/people/wenche-gronbrekk.png"
                        country="Noruega"
                        description="Presidente do Pacto Global da ONU na Noruega e Diretora de Estratégia da SeaBOS"
                    />
                    <PersonCard 
                        name="Karen Kun"
                        img="quem-pensa-faz/people/karen-kun.png"
                        country="Canadá"
                        description="Fundadora e Presidente da Waterlution"
                    />
                    <PersonCard 
                        name="Brandon Levy SOA"
                        img="quem-pensa-faz/people/brandon-levy.png"
                        country="USA"
                        description="Diretor de Programação da SOA"
                    />
                </PeopleContainer>
                <Button>Conheça Todos</Button>
                
                <Divider width="80%" sx={{ marginTop: '30px' }} />

                <Typography variant="h1" color={colors.blueLighter} paddingY="20px">NO BRASIL</Typography>
                <PeopleContainer>
                    <PersonCard 
                        name="Ronaldo Christofoletti"
                        img="quem-pensa-faz/people/ronaldo-christofoletti.png"
                        description="Professor Associado do Instituto do Mar da Universidade Federal de São Paulo"
                    />
                    <PersonCard 
                        name="Samuel Barreto"
                        img="quem-pensa-faz/people/samuel-barreto.png"
                        description="Gerente Nacional de Água da The Natural Conservancy (TNC)"
                    />
                    <PersonCard 
                        name="Dawn Fleming"
                        img="quem-pensa-faz/people/dawn-fleming.png"
                        description="Coordenadora do Water Innovation Lab (WIL) Brasil"
                    />
                    <PersonCard 
                        name="Glauco Kimura"
                        img="quem-pensa-faz/people/glauco-kimura.png"
                        description="Oficial de Projetos de Ciências Naturais da UNESCO Brasil"
                    />
                </PeopleContainer>
                <Button>Conheça Todos</Button>
            </AdvisoryBoardSectionContainer>
            <ParceirosContainer>
                <SectionBlueTitle variant="h1">PARCEIROS</SectionBlueTitle>
                <Typography variant="body1">São organizações que desenvolvem soluções e tecnologias inovadoras voltadas à Conservação, à Regeneração e à Sustentabilidade de todos os ecossistemas aquáticos, assim como projetos de sensibilização para nossa reconexão com o Mundo ÁGUA-OCEANO.</Typography>

                <Typography variant="h1" color={colors.blueLighter} paddingY="20px">NO MUNDO</Typography>
                <Grid container spacing={2} marginBottom={2}>
                    <ParceiroImg src="white-placeholder.png" />
                    <ParceiroImg src="white-placeholder.png" />
                    <ParceiroImg src="white-placeholder.png" />
                    <ParceiroImg src="white-placeholder.png" />
                    <ParceiroImg src="white-placeholder.png" />

                    <br />

                    <ParceiroImg src="white-placeholder.png" />
                    <ParceiroImg src="white-placeholder.png" />
                    <ParceiroImg src="white-placeholder.png" />
                    <ParceiroImg src="white-placeholder.png" />
                    <ParceiroImg src="white-placeholder.png" />
                </Grid>
                <Button>Conheça Todos</Button>

                <Divider width="80%" sx={{ marginTop: '30px' }} />

                <Typography variant="h1" color={colors.blueLighter} paddingY="20px">NO BRASIL</Typography>
                <Grid container spacing={2} marginBottom={2}>
                    <ParceiroImg src="white-placeholder.png" />
                    <ParceiroImg src="white-placeholder.png" />
                    <ParceiroImg src="white-placeholder.png" />
                    <ParceiroImg src="white-placeholder.png" />
                    <ParceiroImg src="white-placeholder.png" />

                    <br />

                    <ParceiroImg src="white-placeholder.png" />
                    <ParceiroImg src="white-placeholder.png" />
                    <ParceiroImg src="white-placeholder.png" />
                    <ParceiroImg src="white-placeholder.png" />
                    <ParceiroImg src="white-placeholder.png" />
                </Grid>
                <Button>Conheça Todos</Button>

            </ParceirosContainer>
        </Box>
    );
};