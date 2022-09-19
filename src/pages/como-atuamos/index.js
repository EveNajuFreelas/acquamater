import { Box, Typography } from '@mui/material';
import { Head } from '../../components/head';
import { PersonQuoteCard } from '../../components/person-quote-card';
import { IntroContainer } from './styles';

export const ComoAtuamos = () => (
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

            <PersonQuoteCard 
                quote='"abubleble !!! bblebleblue blebiblala"'
                personImg="quem-pensa-faz/people/sergio-mello.png"
                name="Sérgio Mello"
                description="bibliblbl"
            />
        </IntroContainer>
    </Box>
);