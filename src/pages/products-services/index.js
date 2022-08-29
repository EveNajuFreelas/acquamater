import ColumnTextImage from "../../components/ColumnTextImage";
import {
  ContainerProducts,
  Title,
  HeadPage,
  Description,
  ContainerText,
  ContainerProduct,
} from "./styles";
import people_circle from "../../utils/images/people_circle.png";
import { Typography } from "@mui/material";
import { Wrapper } from "../styles";

const ProductsServices = () => {
  return (
    <>
      <HeadPage
        image={
          "http://www.patobragado.pr.gov.br/uploads/article/2021-02/saude-promove-palestras-de-prevencao-a-covid-19-na-escola-municipal-d7f2c94b32.jpg"
        }
      >
        <ContainerText maxWidth="lg">
          <Title variant="h1">O que oferecemos</Title>

          <Description>
            <Typography variant="subtitle1">
              Todos os produtos da Acqua Mater são realizados tendo por eixo a
              ÁGUA e o OCEANO e têm sinergia entre si, podendo se articular
              dependendo das necessidades do cliente
            </Typography>
          </Description>
        </ContainerText>
      </HeadPage>

      <ContainerProducts>
        <ContainerProduct>
          <Wrapper>
            <ColumnTextImage
              image={people_circle}
              title="Palestras"
              pathName="/o-que-oferecemos/palestras"
              button
            >
              Oferecemos uma série de <strong>Palestras</strong> ligadas ao
              Mundo ÁGUA-OCEANO que incentivam reflexões, pesquisas, mudanças de
              comportamneto e tomadas de decisão. Janelas sobre o mundo para ver
              mais e além. Uma "lente azul" através da qual conseguimos olhar
              para a vida, relações e os negócios sob um prisma disruptivo e
              revelador.
            </ColumnTextImage>
          </Wrapper>
        </ContainerProduct>
        <ContainerProduct>
          <Wrapper>
            <ColumnTextImage
              image={people_circle}
              title="Capacitação"
              pathName="/o-que-oferecemos/capacitacao"
              button
              reverse
            >
              Oferecemos <strong>Workshops, Treinamentos e Cursos</strong> com o
              objetivo de sensibilizar, informar e formar multiplicadores do
              conhecimento que aprendam e apliquem novas ferramentas para atuar
              em prol da conservação, da regeneração e da sustentabilidade de
              todos os ecossistemas do Mundo ÁGUA-OCEANO.
            </ColumnTextImage>
          </Wrapper>
        </ContainerProduct>

        <ContainerProduct>
          <Wrapper>
            <ColumnTextImage
              image={people_circle}
              title="Consultorias"
              pathName="/o-que-oferecemos/consultoria"
              button
            >
              Oferecemos Consultorias de <strong>Conteúdo de Curadoria</strong>{" "}
              e de <strong>Soluções Integradas</strong> para ajudar pessoas e
              organizações a adquirirem uma visão 360° do Mundo ÁGUA-OCEANO e
              para encontrar soluções que gerem mais saúde e mais vida em nosso
              planeta.
            </ColumnTextImage>
          </Wrapper>
        </ContainerProduct>

        <ContainerProduct>
          <Wrapper>
            <ColumnTextImage
              image={people_circle}
              title="Experiência"
              pathName="/o-que-oferecemos/experiencia"
              button
              reverse
            >
              Oferecemos Workshops, Viagens e Eventos Artísticos para reconectar
              as pessoas mais profundamente com o Mundo ÁGUA-OCEANO sob as
              perspectivas pessoal, social e ambiental. Os participantes
              "mergulharão em suas próprias águas” ao mesmo tempo em que irão
              desacelerar dos ritmos urbanos e ampliar sua percepção sobre a
              vida e o mundo.
            </ColumnTextImage>
          </Wrapper>
        </ContainerProduct>
      </ContainerProducts>
    </>
  );
};

export default ProductsServices;
