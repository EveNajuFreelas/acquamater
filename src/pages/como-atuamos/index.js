import { Box, Grid, Typography, Button } from '@mui/material';
import { Head } from '../../components/head';
import { PersonQuoteCard } from '../../components/person-quote-card';
import { 
    IntroContainer, 
    PeopleContainer, 
    PilaresContainer, 
    GraphContainer, 
    TooltipContainer,
    SubfooterContainer
} from './styles';
import { QuoteSection } from '../../components/quote-section';
import { colors } from '../../theme/colors';
import { GraphTooltip } from '../quem-somos/style';

export const ComoAtuamos = () => { 
    const downloadPDF = () => {
        console.log("Adicionar window.open(filepath) quando liberarem os PDFs para nós");
    };

    return (
        <Box>
            <Head 
                breadcrumbs={[ { url: '/', name: 'Home' }, { url: '/acqua-mater', name: 'Acqua Mater' } ]}
                title="Como Atuamos"
                backgroundImage="default-head-bg.png"
            />
            <IntroContainer>
                <Typography variant="body1">
                    Tudo começa com uma troca: ouvimos as necessidades de cada cliente e, a partir daí, desenhamos e apresentamos a solução que consideramos ser a mais assertiva.
                </Typography>
                <br />
                <Typography variant="body1">
                    Os produtos e serviços são personalizados, nascem de um processo de construção colaborativa que também inclui a participação de nosso Advisory Board e de uma ampla rede de Parceiros.
                </Typography>

                <PeopleContainer>
                    <PersonQuoteCard 
                        quote='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”'
                        personImg="quem-pensa-faz/people/sergio-mello.png"
                        name="Sérgio Mello"
                        description="Consectetur adipiscing elit, sed do ei temper"
                    />
                    <PersonQuoteCard 
                        quote='“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ad minim veniam”'
                        personImg="quem-pensa-faz/people/susana-salvador.png"
                        name="Susana Salvador"
                        description="Consectetur adipiscing elit, sed do ei temper"
                    />
                </PeopleContainer>
                
            </IntroContainer>
            <QuoteSection
                text="ESSÊNCIA"
                textStyle="h3"
                background="como-atuamos-quote-bg.png"
            >
                <Typography variant="body1bold" color="white">Como promover mais SAÚDE nos organismos vivos da Terra? <br /> Como gerar mais VIDA no planeta?</Typography>
                <br/> <br />
                <Typography variant="body1" color="white">Essas sâo perguntas essenciais para a Acqua Mater, que se desdobram das mais variadas formas dentro de seus múltiplos projetos, todos tendo ao centro a ÁGUA e o OCEANO: matrizes da VIDA. <br/><br/> Por isso, oferecemos soluções para que Pessoas e Organizações possam promover SAÚDE & VIDA por meio do cuidado de todas as águas, doces ou salgadas, naturais ou domesticadas, que circulam em nosso planeta.</Typography>
            </QuoteSection>
            <PilaresContainer>
                <Typography variant="h2" color={colors.blueLighter}>PILARES</Typography>
                <Typography variant="body1">Esses são os 6 pilares sobre os quais a Acqua Mater desenvolve todos os seus projetos, de acordo com seu Propósito</Typography>

                <GraphContainer>
                    <GraphTooltip 
                        divTitle="SENSIBILIZAR"
                        title="Despertar conexão emocional e afetiva."
                    />
                    <TooltipContainer w="430px" mt="15px">
                        <GraphTooltip 
                            divTitle="EVOLUIR"
                            title="Transformar algo em si, nas relações e no mundo ao redor, encontrando e promovendo mais equilíbrio e harmonia, olhando para trás e vendo que valeu a pena fazer diferente."
                        />
                        <GraphTooltip 
                            divTitle="INFORMAR"
                            title="Compartilhar conhecimentos sob diferentes perspectivas: daí a importância da transdiciplinaridade para abrir novos campos de visão."
                        />
                    </TooltipContainer>
                    <TooltipContainer w="480px" mt="150px" pl="50px">
                        <GraphTooltip 
                            divTitle="AGIR"
                            title="Mudar o comportamento, tomar decisões, fazer diferente, ser propositivo."
                            bottomText
                        />
                        <GraphTooltip 
                            divTitle="CONSCIENTIZAR"
                            title="Conseguir fazer com que pessoas e organizações absorvam as informações a ponto de sentirem impulso para a mudança: sensação de um certo deslocamento interno. "
                            bottomText
                        />
                    </TooltipContainer>
                    <Box marginTop="50px">
                        <GraphTooltip
                            position="top"
                            divTitle="COLABORAR"
                            title="A diversidade traz complementariedade. Juntos, encontramos soluções criativas, inovadoras e que potencializam o alcance das ações."
                            bottomText
                        />
                    </Box>
                </GraphContainer>
            </PilaresContainer>
            <SubfooterContainer>
                <Grid container spacing={2} height="300px" pt="150px">
                    <Grid item xs={6} display="flex" justifyContent="flex-end">
                        <img src="acquamater-logo.svg" alt="acquamater" width="300px" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h3">Apresentação Institucional <br/> Acqua Mater</Typography>
                        
                        <Typography variant="body1" mt="20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</Typography>

                        <Box display='flex' mt="40px" alignItems="center">
                            <Typography variant="body1" mr="20px">
                                Baixe o arquivo em PDF
                            </Typography>
                            <Button onClick={downloadPDF}>Download</Button>
                        </Box>
                    </Grid>
                </Grid>
            </SubfooterContainer>
        </Box>
    )
};