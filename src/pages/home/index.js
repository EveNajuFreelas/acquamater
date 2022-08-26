import { Box, Container } from "@mui/material"
import ColumnTextImage from "../../components/ColumnTextImage";
import { ImgContainer } from "./styles";

const Home = () => {
    return (
        <Box>
            <ImgContainer src="home-intro.png" alt="Acqua Mater introdução" />
            <Container>
                <ColumnTextImage 
                    image='acqua-mater-name.png'
                    content='Somos uma organização brasileira com atuação global
                    que incentiva a geração de mais saúde e mais vida a partir
                    do cuidado de todas as águas que circulam no planeta.
                    Nossos projetos transdisciplinares são voltados à
                    Conservação, à Regeneração e à Sustentabilidade de toda
                    a vida que habita o Mundo ÁGUA-OCEANO'
                    buttons={[
                        { title: 'Saiba Mais', url: '' }, 
                        { title: 'Assista ao filme SOMOS ÁGUA', url: '' }
                    ]}
                />
                patricia
                prada quote
                oq oferecemos
                como atuamos
            </Container>
        </Box>
    );
};

export default Home;