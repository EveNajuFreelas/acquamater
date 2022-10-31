import { Box, Button, Typography, Grid, Modal, Divider } from '@mui/material';
import {
	ContainerBio,
	WrapperHead,
	ContainerHead,
	Text,
	WrapperSecond,
	Videos,
	VideoSection,
	PodcastSection,
	Podcasts,
	PerformerSection,
	Performers,
} from './style';
import { colors } from '../../theme/colors';
import { Testimony } from './Testimony';
import { Video } from './Video';
import { Podcast } from './Podcast';
import { useState } from 'react';
import { ModalContainer } from '../quem-pensa-e-faz/styles';
import { Add } from '@mui/icons-material';
import { Head } from '../../components/head';

export const PatriciaFurtado = () => {
  const fullMarceloText = (
    <>
      Trabalhei com Patricia na Ampla (atual Enel Distribuição, Rio de Janeiro)
      em diversos projetos de transformação cultural. Sua contribuição foi muito
      significativa: por sua diversidade, pela intensidade e pela paixão que
      colocava em tudo o que fazia. Ela se envolvia 100% em todos os projetos,
      emocionalmente e profissionalmente. Sempre trouxe um ponto de vista
      diferente que, sem dúvida, ajudou na transformação da nossa empresa.{" "}
      <br /> Fico feliz em ver que hoje ela está liderando sua própria
      organização, Aqua Mater, e estou convencido de que seu trabalho terá um
      grande impacto. <br /> Cuidar da forma como nos relacionamos com a água é
      muito importante, devido ao momento crítico que nossa civilização vive.
      Enfrentamos uma crise ambiental que foi gerada por nós mesmos! <br /> Acho
      que se a água tivesse que escolher um porta-voz, sem dúvida a Patrícia
      seria uma das principais candidatas! Ele consegue transmitir o que a água
      precisa, o que a água quer nos dizer. <br /> Patricia é clara sobre o
      impacto que temos no meio ambiente e a importância de saber se conectar
      com outros seres vivos, com toda a natureza. Ela sabe que é preciso usar
      outro tipo de linguagem. A água nos pede uma conexão que vai além das
      palavras! <br /> Patricia entende a linguagem usada pela água, pelo meio
      ambiente , e consegue traduzi-la com uma paixão e uma energia invejáveis.
    </>
  );

  const fullSusanaText = (
    <>
      Lembro-me bem do dia em que cruzei a Patricia Furtado de Mendonça. Foi
      numa Conferência em Cascais sobre o mar e a proteção dos oceanos – a Ocean
      Talks, organizado pela Galp no Museu do Mar de Cascais - em que tive a
      honra de participar como Secretária Executiva da OSPAR, uma Convenção
      internacional para a Proteção do Ambiente Marinho do Nordeste do
      Atlântico. Isso aconteceu num momento em que eu estava a organizar a
      Reunião Ministerial da OSPAR que teria lugar em Cascais, e imediatamente a
      convidei para fazer a abertura da mesma, que no entanto acabou por ser
      adiada para 2021 devido à pandemia. A força inspiradora da Patricia
      deve-se a tão genuinamente conseguir expressar a sua verdade, que é também
      a nossa, a de todos os seres humanos e seres vivos deste planeta: a de que
      sem água não há vida, a de que sem oceanos saudáveis não pode haver vida
      saudável. <br />
      Naturalmente, como muitos outros colegas, habituados a estes eventos,
      participo em debates mais ou menos técnicos e/ou científicos, estruturados
      de forma semelhante, resultando em conclusões, documentos, relatórios,
      planos de ação. A apresentação da Patricia foi avassaladora porque a
      revelação da verdade singela surgiu a todos logo ali: proteger a água
      porque somos água. Graças à sua brilhante capacidade comunicativa e pondo
      tudo o que sentia nas palavras com que se expressava, a Patricia deu o
      mote à Conferência. Ela foi início, inspiração e conclusão. Tudo é tão
      simples e óbvio que nem sempre se vê. A Patricia revela o simples e o
      verdadeiro, fala a todos e a cada um em simultâneo, lembra-nos essa
      ligação primordial com a água, berço de vida. <br />
      Fiquei emocionada com a autenticidade e a plenitude do seu propósito, com
      a força da sua convicção e muito grata por conhecer alguém que consegue
      conciliar e transmitir conhecimento, ciência, cultura e vida, invocando a
      nossa mãe-água, o mar da nossa infância, o quão somos água. <br />
      Acredito profundamente na nobre ação da Acqua Mater liderada pela
      excelência e profissionalismo da Patricia na luta pela preservação do mar
      e da biodiversidade marinha, assim como no seu papel fundamental na
      disseminação do conhecimento sobre o oceano e - como diria Sophia de Mello
      Breyner Andresen, a poeta da imanência, do concreto e das coisas visíveis
      - em ajudar-nos a todos a “descobrir a presença do real”.{" "}
    </>
  );

  const [activeText, setActiveText] = useState({
    text: null,
    author: null,
  });
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalContent = (name) => {
    setActiveText(
      name === "MARCELO LLÉVENES"
        ? { text: fullMarceloText, author: name }
        : { text: fullSusanaText, author: name }
    );
    handleModal();
  };

  const handleModal = () => {
    setModalOpen((curr) => !curr);
  };

  const downloadPDF = () => {
    window.open("/BIO_LONGA_PAT.pdf");
  };

  return (
    <Box overflow="hidden">
      <Head backgroundImage="/acquamater/patricia-head.png" />
      <WrapperHead>
        <ContainerHead>
          <Grid item md={5}>
            <img
              src="/acquamater/patricia-first.png"
              alt="Patricia Furtado"
              width="100%"
            />
          </Grid>
          <Grid item md={5}>
            <Text>
              <Typography
                variant="h2"
                color={colors.primary}
                fontWeight="bold"
                style={{ width: "100%" }}
              >
                Patricia Furtado de Mendonça
              </Typography>
              <Typography style={{ width: "100%" }}>
                Fundadora & CEO da Acqua Mater
              </Typography>
            </Text>
          </Grid>
        </ContainerHead>
      </WrapperHead>

      <Modal open={modalOpen} onClose={handleModal}>
        <ModalContainer>
          <Typography variant="h3" margin="20px">
            "{activeText.text}"
            <Divider variant="middle" width="100%" sx={{ marginY: "20px" }} />
            {activeText.author}
          </Typography>
        </ModalContainer>
      </Modal>

      <ContainerBio>
        <Typography variant="body1" maxWidth={"1024px"}>
          - Brasileira e Italiana, Empreendedora, Palestrante
          Inspiracional/Storyteller, Defensora do Oceano e das Águas,
          Facilitadora de Experiências de Reconexão com a Água e com o Oceano,
          Mergulhadora; <br />- “Profissional de ImPacto” da Rede Brasil do
          Pacto Global da ONU; <br />
          - Co-líder do Componente "Treinamento" do OLWA (Ocean Literacy With
          All), programa coordenado pela COI-UNESCO e endossado pela Década do
          Oceano da ONU; <br />
          - Coordenadora-Brasil da RELATO (Red de Educación LatinoAmericana para
          el Océano); <br />
          - Mentora e Conselheira de várias organizações internacionais voltada
          para jovens, como Waterlution, Sustainable Ocean Alliance, UNFCCC
          YOUNGO Ocean’s Voice, entre outras..
          <br />
          <br />
          Patricia atua na interface Artes-Educação-Sustentabilidade há mais de
          20 anos, tendo trabalhado em âmbito acadêmico, artístico, empresarial,
          governamental e do terceiro setor. Multipotencial e motivada por sua
          imensa paixão por rios e mares, funda a ACQUA MATER em 2017 e coloca a
          ÁGUA e o OCEANO ao centro de todas as suas atividades.
          <WrapperSecond>
            <Typography color="primary" fontWeight="bold" width={"100%"}>
              Para a acessar a Bio completa, baixe o pdf
            </Typography>
            <Button onClick={downloadPDF} style={{ maxWidth: "100px" }}>
              Download
            </Button>
          </WrapperSecond>
        </Typography>

        <Grid container spacing={2} style={{ marginTop: '60px', display: 'flex', justifyContent: 'center' }}>
          <Grid item md={4}>
            <Testimony
              author="/acquamater/patricia-marcelo.png"
              name="MARCELO LLÉVENES"
              country="Chile"
              role="Cofundador e Diretor Executivo da Clickie e ex-CEO da Enel Brasil - Distribuição"
            >
              “Trabalhei com Patricia na Ampla (atual Enel Distribuição, Rio de
              Janeiro) em diversos projetos de transformação cultural. Sua
              contribuição foi muito significativa: por sua diversidade, pela
              intensidade e pela paixão que colocava em tudo o que fazia (...).
              <br />
              Acho que se a água tivesse que escolher um porta-voz, sem dúvida a
              Patrícia seria uma das principais candidatas! Ele consegue
              transmitir o que a água precisa, o que a água quer nos dizer.”{" "}
              <br />
              <br />
              <Button
                onClick={() => handleModalContent("MARCELO LLÉVENES")}
                style={{ minWidth: 0, padding: 0 }}
              >
                <Add />
              </Button>
            </Testimony>
          </Grid>

          <Grid item md={4}>
            <Testimony
              author="/acquamater/patricia-susana.png"
              name="SUSANA SALVADOR"
              country="Portugal / França"
              role="Secretária Executiva ACCOBAMS"
            >
              "Participo em debates mais ou menos técnicos e/ou científicos,
              estruturados de forma semelhante, resultando em conclusões,
              documentos, relatórios, planos de ação. A apresentação da Patricia
              foi avassaladora porque a revelação da verdade singela surgiu a
              todos logo ali: proteger a água porque somos água. Graças à sua
              brilhante capacidade comunicativa e pondo tudo o que sentia nas
              palavras com que se expressava, a Patricia deu o mote à
              Conferência."
              <br />
              <br />
              <Button
                onClick={() => handleModalContent("SUSANA SALVADOR")}
                style={{ minWidth: 0, padding: 0 }}
              >
                <Add />
              </Button>
            </Testimony>
          </Grid>
        </Grid>
      </ContainerBio>

      <VideoSection>
        <Typography
          variant="h2"
          color="primary"
          style={{ marginBottom: "50px", fontSize: "30px" }}
        >
          VÍDEOS
        </Typography>
        <Videos>
          <Video img="/acquamater/patricia-video-1.png" title="COI-UNESCO" />
          <Video img="/acquamater/patricia-video-2.png" title="GALP ENERGIA" />
          <Video
            img="/acquamater/patricia-video-3.png"
            title="A ÁGUA QUE FALTA"
          />
          <Video img="/acquamater/patricia-video-4.png" title="SOMOS ÁGUA" />
          <Video
            img="/acquamater/patricia-video-5.png"
            title="A ÁGUA QUE FALTA"
            subtitle="(Making of)"
          />
          <Video
            img="/acquamater/patricia-video-6.png"
            title="A ÁGUA QUE FALTA"
            subtitle="(Teaser)"
          />
        </Videos>
      </VideoSection>

      <PodcastSection>
        <Typography
          variant="h2"
          color="primary"
          style={{ marginBottom: "50px", fontSize: "30px" }}
        >
          PODCASTS
        </Typography>
        <Podcasts>
          <Podcast
            img="/acquamater/patricia-podcast-1.png"
            title="T1 E19: Propósito e realização"
            subtitle="Patricia Furtado"
            participation="Com Éder Monteiro"
          />
          <Podcast
            img="/acquamater/patricia-podcast-2.png"
            title="UM OCEANO DE MEMÓRIAS"
            subtitle="Especial Água - Sob a perspectiva delas"
            participation="Com Mariana Godoy"
          />
          <Podcast
            img="/acquamater/patricia-podcast-3.png"
            title="BEE MY GUEST"
            participation="Com Cláudia Penteado"
          />
        </Podcasts>
      </PodcastSection>

      <PerformerSection>
        <Typography variant="h2" color="primary" style={{ fontSize: "26px" }}>
          Patricia atuando como Performer Subaquática
        </Typography>
        <Performers>
          <img
            src="/acquamater/patricia-performer-1.png"
            alt="patricia performando"
          />
          <img
            src="/acquamater/patricia-performer-2.png"
            alt="patricia performando"
          />
          <img
            src="/acquamater/patricia-performer-3.png"
            alt="patricia performando"
          />
        </Performers>
        <Typography>Fotógrafia: Ary Amarante</Typography>
      </PerformerSection>
    </Box>
  );
};
