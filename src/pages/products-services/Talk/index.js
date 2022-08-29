import { Grid, Typography } from "@mui/material";
import ColumnTextImage from "../../../components/ColumnTextImage";
import { ContainerTextSingle, HeadPage } from "../styles";
import {
  ContainerTitle,
  Title,
  Themes,
  List,
  TitleThemesBox,
  TitleThemesBlue,
  ContainerThemes,
} from "./styles";
import people_circle from "../../../utils/images/people_circle.png";
import { Wrapper } from "../../styles";

const Talk = () => {
  const listAllThemesLeft = [
    "Cultura Oceânica como ferramenta para o sucesso da Década do Oceano da ONU",
    "Cultura Oceânica no Setor Privado: avançando com Indicadores ESG",
    "Sustentabilidade do Oceano & ODS 14: Desafios da Década do Oceano da ONU",
    "O diálogo entre o ODS 6 (Água e Saneamento) e o ODS 14 (Vida na Água)",
    "Plástico no Mar, no Ciclo Hídrico e Dentro de Nós: o que fazer?",
    "Água-Oceano ao centro dos demais ODS",
    "Liderança & Filosofia da Agua",
  ];

  const listAllThemesRight = [
    "Oceano: um Paradigma da Colaboração e da Cooperação ",
    "Carreira: Propósito & Realização",
    "Jovens construindo o presente, e não só futuro",
    "Água, Oceano & Mulheres",
    "Saúde da Água / Saúde do Oceano / Saúde Humana",
    "Por que devemos nos (re)conectar ao Mundo Água-Oceano?",
    "A Sabedoria da Água: veículo de autoconhecimento,autocuidado e transformação",
    "Um Oceano de Memórias: águas que nos atravessam e habitam.",
  ];

  const listMacrothemes = [
    "Regeneração, Sustentabilidade, Agenda 2030 da ONU",
    "Biodiversidade e Conservação de todos os Ecossistemas Aquáticos",
    "Contaminação das águas por diversos poluentes e impactos na fauna e na flora",
    "Soluções Baseadas na Natureza",
    "Novas Tecnologias & Novos Negócios de Impacto Socioambiental",
    "Fundos de Investimento / Indexes ESG ligados à Água e ao Oceano",
    "Economia Circular",
    "Relação com Sociedades e Culturas, com Gênero e Diversidade",
    "Projetos de Educação Ambiental focados nas Águas",
    "Os vários desafios ligados ao Nexo Água - Oceano",
    "Clima",
  ];

  return (
    <>
      <HeadPage
        image={
          "http://www.patobragado.pr.gov.br/uploads/article/2021-02/saude-promove-palestras-de-prevencao-a-covid-19-na-escola-municipal-d7f2c94b32.jpg"
        }
      >
        <ContainerTextSingle maxWidth="lg">
          <Typography variant="subtitle1">
            Oferecemos uma série de Palestras ligadas ao Mundo ÁGUA-OCEANO que
            incentivam reflexões, pesquisas, mudanças de comportamento e tomadas
            de decisão. Janelas sobre o mundo para ver mais e além. Uma "lente
            azul" através da qual conseguimos olhar para a vida, as relações e
            os negócios sob um prisma disruptivo e revelador.
          </Typography>
        </ContainerTextSingle>
      </HeadPage>
      <ContainerTitle>
        <Title maxWidth="lg">Palestras</Title>
      </ContainerTitle>
      <Wrapper>
        <ColumnTextImage image={people_circle} title="Palestras Patricia">
          A formação e a experiência de Patricia como Atriz e Professora fizeram
          dela uma verdadeira "Storyteller". Além de apresentar e moderar
          eventos, dá Palestras Inspiracionais para os mais variados públicos,
          no Brasil e no exterior, compartilhando sua experiência pessoal, suas
          pesquisas e aprendizagens relacionadas ao Mundo ÁGUA-OCEANO. Seu
          background artístico e sua pluralidade profissional permitem que
          misture temas, transmita dados científicos e informações atuais que
          favoreçam mudanças de comportamento e tomadas de decisão. Sua visão
          sistêmica é capaz de sensibilizar as pessoas, visando à transformação
          humana, social e ambiental.
          <p>Línguas Fluentes: português, inglês, espanhol, italiano.</p>
        </ColumnTextImage>

        <Themes>
          <TitleThemesBox variant="h2">
            Você está buscando uma Palestra impactante, inspiradora e criativa?
            Quer tocar o coração da plateia, convidando-a a pensar "fora da
            caixa"? Esses são alguns dos temas sobre os quais Patricia pode
            falar:
          </TitleThemesBox>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <List>
                {listAllThemesLeft.map((item) => (
                  <li>{item}</li>
                ))}
              </List>
            </Grid>
            <Grid item xs={6}>
              <List>
                {listAllThemesRight.map((item) => (
                  <li>{item}</li>
                ))}
              </List>
            </Grid>
          </Grid>
        </Themes>

        <ColumnTextImage
          image={people_circle}
          title="Palestras Parceiro"
          subtitle="(só atende no Brasil)"
          reverse
        >
          A Acqua Mater conta com um variado leque de Palestrantes (educadores,
          jornalistas, cientistas e empreendedores) que são especialistas em
          diversos tópicos ligados, precisamente, à ÁGUA e ao OCEANO. Eles podem
          falar sobre os Macrotemas indicados abaixo em sua relação com a Água,
          com o Oceano ou com os dois – ou sobre temas mais específicos de cada
          um, como indicado nos boxes que seguem.
        </ColumnTextImage>

        <div style={{ width: "100%" }}>
          <Themes dense>
            <TitleThemesBlue variant="h2">Macrotemas</TitleThemesBlue>
            <List>
              {listMacrothemes.map((item) => (
                <li>{item}</li>
              ))}
            </List>
          </Themes>
        </div>

        <ContainerThemes>
          <Themes dense>
            <TitleThemesBlue variant="h2">Macrotemas</TitleThemesBlue>
            <List>
              {listMacrothemes.map((item) => (
                <li>{item}</li>
              ))}
            </List>
          </Themes>
          <Themes dense>
            <TitleThemesBlue variant="h2">Macrotemas</TitleThemesBlue>
            <List>
              {listMacrothemes.map((item) => (
                <li>{item}</li>
              ))}
            </List>
          </Themes>
        </ContainerThemes>
      </Wrapper>
    </>
  );
};

export default Talk;
