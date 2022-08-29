import { Box } from "@mui/material"
import ColumnTextImage from "../../components/ColumnTextImage";
import { QuoteSection } from "../../components/quote-section";
import { ImgContainer } from "./styles";

const Home = () => {
    return (
        <Box>
            <ImgContainer src="home-intro.png" alt="Acqua Mater introdução" />
                <ColumnTextImage 
                    image={{ img: 'acqua-mater-name.png', isBg: false }}
                    content='Somos uma organização brasileira com atuação global que incentiva a geração de mais saúde e mais vida a partir do cuidado de todas as águas que circulam no planeta. Nossos projetos transdisciplinares são voltados à Conservação, à Regeneração e à Sustentabilidade de toda a vida que habita o Mundo ÁGUA-OCEANO'
                    buttons={[
                        { title: 'Saiba Mais', url: '/quem-somos' }, 
                        { title: 'Assista ao filme SOMOS ÁGUA', url: 'https://www.youtube.com/watch?v=W740g2Shb7s' }
                    ]}
                />
                <ColumnTextImage 
                    title="Patrícia Furtado de Mendonça"
                    content={`- Brasileira e Italiana, Empreendedora, Palestrante Inspiracional/Storyteller, Defensora do Oceano e das Águas, Facilitadora de Experiências de Reconexão com a Água e com o Oceano, Mergulhadora; \n - "Profissional de ImPacto" da Rede Brasil do Pacto Global da ONU; \n - Co-lider do Componente "Treinamento" do OLWA (Ocean Literacy With All), programa coordenado pela COI-UNESCO e endossado pela Década do Oceano da ONU; \n - Coordenadora-Brasil da RELATO (Red de Educación LatinoAmericana para el Océano); \n - Mentora e Conselheira de várias organizações internacionais voltada para jovens, como Waterlution, Sustainable Ocean Alliance, UNFCCC YOUNGO Ocean's Voice, entre outras.`}
                    image={{ img: 'patricia-furtado.png', isBg: false }}
                    buttons={[{ title: 'Saiba Mais', url: '/quem-pensa-e-faz#patricia'}]}
                />
                <QuoteSection 
                    background='bg-prada-quote.png'
                    text="Estamos extremamente orgulhosos de continuar tendo Patricia Furtado de Mendonça desempenhando um papel ativo no projeto SEA BEYOND, o programa educacional desenvolvido pelo Grupo Prada em colaboração com a COI-UNESCO, para difundir os princípios da Cultura Oceânica em todo o mundo."
                    author='EQUIPE DE COMUNICAÇÃO CORPORATIVA DO GRUPO PRADA/ITÁLIA'
                    authorLogo='prada-logo.png'
                />
                <ColumnTextImage 
                    reverse
                    invertedColors
                    image={{ img: 'o-que-oferecemos-bg.png', isBg: true }}
                    title="O que Oferecemos"
                    content='Todos os Produtos da Acqua Mater são realizados tendo por eixo a ÁGUA e O OCEANO e tém sinergia entre si, podendo se articular dependendo das necessidades do cliente'
                    extraImg="o-que-oferecemos-graph.png"
                    buttons={[ { title: 'Saiba Mais', url: '/o-que-oferecemos' } ]}
                />
                <ColumnTextImage 
                    reverse
                    image={{ img: 'como-atuamos-bg.png', isBg: true }}
                    title="Como atuamos"
                    content="Tudo começa com uma troca: ouvimos as necessidades de cada cliente e, a partir daí, desenhamos e apresentamos a solução que consideramos ser a mais
                    assertiva.
                    Os produtos são personalizados, nascem de um processo de construção colaborativa que também inclui a participação de nosso Advisory Board e de uma ampla rede de Parceiros."
                    buttons={[
                        { title: 'Conheça nosso Advisory Board', url: '/'},
                        { title: 'Conheça nossos Parceiros', url: '/parceiros' }
                    ]}
                />
        </Box>
    );
};

export default Home;