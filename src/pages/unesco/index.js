import { Box, Grid, Typography, Link, Chip, Stack } from "@mui/material";
import { Head } from "../../components/head";
import { PersonQuoteCard } from "../../components/person-quote-card";
import { CulturaOceanicaContainer, LinksContainer, LinksDivider } from "./style";
import { colors } from '../../theme/colors';

export const UNESCO = () => (
    <Box>
        <Head
            breadcrumbs={[ { url: '/', name: 'Home' }, { url: '/acqua-mater', name: 'Acqua Mater' } ]} 
            title="Acqua Mater & UNESCO"
            backgroundImage="/acquamater/default-head-bg.png"
        />

        <Box my="100px" width="70%" mx="auto">
            <Grid container spacing={2} mb="50px">
                <Grid item md={6}>
                    <img src="/acquamater/unesco-section-img.png" alt="UNESCO" width="100%" />
                </Grid>
                <Grid item md={6}>
                    <Typography variant="body1" textAlign="end">A UNESCO é uma agência da ONU fundada em 1945 e voltada para a Educação, a Ciência e a Cultura.
                    <br/><br/>
                    A Acqua Mater acredita que esses três âmbitos do saber são fundamentais para os projetos que desenvolve, inclusive no campo da Sustentabilidade. Ainda que, para a maioria, esta se baseie apenas no tripé Economia-Meio Ambiente-Sociedade – o famoso triple bottom line –há quem some a estes a dimensão da CULTURA, por considerá-la fundamental para o desenvolvimento sustentável. A UNESCO também apoia essa ideia.</Typography>
                </Grid>            
            </Grid>
        </Box>

        <CulturaOceanicaContainer>
            <Typography variant="body1" textAlign="center">Em 1961, nasce a Comissão Oceanográfica Intergovernamental (COI) da UNESCO, para promover um maior conhecimento sobre o que o oceano representa para a humanidade e para toda a vida na Terra. </Typography>

            <Box mt="40vh" mb="25vh">
                <Typography variant="h1" color="white">ACQUA MATER <br/> & CULTURA OCEÂNICA</Typography>

                <Grid container spacing={5} mt="2vh">
                    <Grid item md={4}>
                        <Typography variant="body1" color="white">Durante a Conferência da ONU sobre o Oceano, realizada em 2017 em NY, a COI-UNESCO lança a iniciativa "Cultura Oceânica para Todos", visando desenvolver parcerias globais para o projeto de Cultura Oceânica nascido nos Estados Unidos em 2002, no âmbito da Educação Escolar. No mesmo ano, lança o Portal de Cultura Oceânica.
                        <br /> <br/>
                        Em 2019, a Acqua Mater é convidada pela COI-UNESCO para participar de dois workshops internacionais em sua sede de Veneza: "Cultura Oceânica no contexto da Década da Ciência Oceânica para o Desenvolvimento Sustentável" e "Desenvolvimento Profissional de Cultura Oceânica para o Setor Privado”. Este segundo workshop leva a Acqua Mater a começar a desenvolver um treinamento específico voltado para este setor ainda em 2020.
                        </Typography>
                    </Grid>
                    <Grid item md={4}>
                        <Typography variant="body1" color="white">Desde então, a Acqua Mater vem colaborando com diferentes iniciativas internacionais deste Programa, entre as quais:
                        <br/><br/>
                        - Virtual Ocean Literacy Summit (2020); <br/>
                        - Ocean Literacy Training Course (2021);<br/>
                        - "Ocean Literacy within the Ocean Science Decade of Ocean Science for Sustainable Development" - A Framework for Action (2021);<br/>
                        - Sea Beyond First & Second Edition - Educational project IOC-UNESCO + Grupo Prada (2021/2022);<br/>
                        - Ocean-Climate Village Catalogue Launch/World Ocean Day (2022).<br/>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <PersonQuoteCard 
                horizontal
                quote='"Patricia é uma rara combinação de talento artístico e compromisso sério com a proteção do oceano. Tive o prazer de conhecê-la por ocasião de um workshop que organizei em Veneza em 2019 e, desde então, continuamos a trabalhar juntas para promover a Cultura Oceânica para Todos e com Todos!"'
                personImg="/acquamater/quem-pensa-faz/people/francesca-santoro.png"
                name="Francesca Santoro"
                description="Responsável Cultura Oceânica da COI-UNESCO"
            />

        </CulturaOceanicaContainer>
        <Box textAlign="center" mb="5%" px="15%">
            <Typography variant="body1" mb="30px">Em 2021, é convidada a integrar o seleto grupo de colaboradores internacionais do novo Programa da COI-UNESCO "Cultura Oceânica com Todos" (Ocean Literacy With All/OLWA), coordenado por Francesca Santoro e formalmente endossado pela "Década do Oceano" da ONU.</Typography>

            <Box display="flex" justifyContent="space-around">
                <img src="/acquamater/UN-dossd.png" alt="United Nations program" />
                <img src="/acquamater/ocean-literacy-logo.png" alt="Ocean Literacy For All logo" />
            </Box>

            <Typography variant="body1" my="30px">Atualmente, Patricia Furtado, CEO da Acqua Mater, é co-líder do grupo de trabalho do OLWA que se dedica a desenvolver, sempre no âmbito da Cultura Oceânica: "treinamentos, associações e outras oportunidades para diferentes públicos, incluindo educadores, jornalistas, governo, setor privado, sociedade civil, ONGs, profissionais da diplomacia, entre outros".</Typography>

        </Box>
        <LinksContainer>
            <Typography variant="h1" color={colors.blueLighter}>PARA SABER MAIS</Typography>
            <Typography variant="h2lite">Projetos com os quais a Acqua Mater colaborou em 2020 e 2021.</Typography>
            <br /><br/>
            <Typography variant="body1bold">
                Portal de Cultura Oceânica da IOC - UNESCO <br/>
                <Link rel="noreferrer" target="_blank" href="https://oceanliteracy.unesco.org/?post-types=all&sort=popular"> https://oceanliteracy.unesco.org/?post-types=all&sort=popular</Link>

                <LinksDivider />

                OLWA - Ocean Literacy With All <br/>
                <Link rel="noreferrer" target="_blank" href="https://oceanliteracy.unesco.org/ocean-literacy-with-all/">https://oceanliteracy.unesco.org/ocean-literacy-with-all/</Link><br/>
                <Link rel="noreferrer" target="_blank" href="https://www.oceandecade.org/actions/ocean-literacy-with-all-olwa-the-change-we-need-for-the-ocean-we-want/">https://www.oceandecade.org/actions/ocean-literacy-with-all-olwa-the-change-we-need-for-the-ocean-we-want/</Link>

                <LinksDivider />

                Baixe o kit Cultura Oceânica para Todos <br />
                <Stack direction="row" spacing={1} my="20px">
                    <Chip label="Português" color="chip" />
                    <Chip label="Inglês" color="chip" />
                    <Chip label="Espanhol" color="chip" />
                    <Chip label="Italiano" color="chip" />
                </Stack>

                <LinksDivider />

                Link para os Treinamentos de Cultura Oceânica oferecidos gratuitamente pela COI-UNESCO, voltados para Educadores, Governo, Mídia e Sociedade: <br />
                <Link rel="noreferrer" target="_blank" href="https://oceanliteracy.unesco.org/training/">https://oceanliteracy.unesco.org/training/</Link>

                <LinksDivider />

                "Ocean Literacy within the Ocean Science Decade of Ocean Science for Sustainable Development" - A Framework for Action <br />
                <Link rel="noreferrer" target="_blank" href="https://unesdoc.unesco.org/ark:/48223/pf0000377708.locale=en">https://unesdoc.unesco.org/ark:/48223/pf0000377708.locale=en</Link>

                <LinksDivider />

                Sea Beyond - Grupo Prada & COI-UNESCO <br/>
                - Sea Beyond First & Second Edition - Educational project IOC-UNESCO + Grupo Prada <br/>
                <Link rel="noreferrer" target="_blank" href="https://www.pradagroup.com/en/sustainability/cultural-csr/prada-re-nylon-sea-beyond-unesco.html">https://www.pradagroup.com/en/sustainability/cultural-csr/prada-re-nylon-sea-beyond-unesco.html</Link> <br/>
                <Link rel="noreferrer" target="_blank" href="https://www.pradagroup.com/en/sustainability/cultural-csr/prada-re-nylon-sea-beyond-unesco-2021.html">https://www.pradagroup.com/en/sustainability/cultural-csr/prada-re-nylon-sea-beyond-unesco-2021.html</Link>
            </Typography>
        </LinksContainer>
    </Box>
);