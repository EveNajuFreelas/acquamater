import ColumnTextImage from "../../components/ColumnTextImage";
import {ContainerWeOffer, ContainerProducts, FirstSection, SectionProduct } from "./styles";
import palestra_oferecemos from "../../utils/images/palestra_oferecemos.png";
import capacitacao_oferecemos from "../../utils/images/capacitacao_oferecemos.png";
import consultoria_oferecemos from "../../utils/images/consultoria_oferecemos.png";
import experiencia_oferecemos from "../../utils/images/experiencia_oferecemos.png";
import bg_experiencia_oferecemos from "../../utils/images/bg_experiencias_oferecemos.jpg";
import { Typography } from "@mui/material";

const ProductsServices = () => {
   return (
      <ContainerWeOffer>
         <FirstSection>
            <div>
               <Typography color='white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Patrícia Furtado. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Typography>
            </div>
         </FirstSection>
         <ContainerProducts>
            <SectionProduct>
               <ColumnTextImage
                  image={palestra_oferecemos}
                  content="Além das Palestras Inspiracionais e Motivacionais conduzidas pela fundadora da Acqua Mater, Patricia Furtado, que também modera e apresenta eventos, trabalhamos com uma série de Palestrantes Parceiros que são especialistas em temas ligados à ÁGUA & OCEANO"
                  title="Palestras"
                  button
               />
            </SectionProduct>
            <SectionProduct grey>
               <ColumnTextImage
                  image={capacitacao_oferecemos}
                  content="Oferecemos Workshops, Treinamentos e Capacitações com o objetivo de sensibilizar, informar e formar multiplicadores que atuem em prol da preservação, da regeneração, da saúde e da sustentabilidade de todos os ecossistemas aquáticos. Sua ampla rede de parceiros garante um portfolio variados de temas no espectro ÁGUA & OCEANO."
                  title="Capacitação"
                  footer="O que você procura? Vamos conversar?"
                  reverse
                  button

               />
            </SectionProduct>
            <SectionProduct>
               <ColumnTextImage
                  image={consultoria_oferecemos}
                  content="Oferecemos:
                  - Curadoria para Mostras, Exposições e Festivais
                  - Realização de Espetáculos, Contação de Histórias, Videoprojeções e Show Musicais 
                  - Conteúdo para projetos pedagógicos, artísticos e ambientais
                  - Soluções Integradas e Inovadoras para projetos voltados à saúde e à sustentabilidade das águas e dos ecossistemas aquáticos:
                  "
                  title="Consultoria"
                  button
               />
            </SectionProduct>
            <SectionProduct bg={bg_experiencia_oferecemos}>
               <ColumnTextImage
                  image={experiencia_oferecemos}
                  content="Para aproximar as pessoas do universo aquático pela lógica do “Conhecer, Amar, Cuidar” organizamos Workshops e Viagens de Experiência que permitem desacelerar dos ritmos urbanos e também se conectar mais profundamente consigo mesmo: as águas de fora nos conectam com as águas de dentro”."
                  title="Experiência"
                  subtitle="Acqua Mater Experience"
                  reverse
                  button
               />
            </SectionProduct>
         </ContainerProducts>
      </ContainerWeOffer>
   );
};

export default ProductsServices;
