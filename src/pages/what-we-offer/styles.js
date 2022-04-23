import styled from "styled-components";
import bg_first_section from '../../utils/images/first_section_oferecemos_bg.jpg';
import bg_white from '../../utils/images/Bg.jpg';

export const ContainerWeOffer = styled.div`
   background: url(${bg_white});
`;

export const ContainerProducts = styled.div`
   
`;

export const FirstSection = styled.div`
   padding: 20vh 0 20vh 20vw;
   background: url(${bg_first_section});

   div {
      width: 40%;
   }
`;

export const SectionProduct = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 30px 0px;
   background: url(${(props) => props.bg && props.bg});
   background-color: ${(props) => props.grey && '#F2F3F4'};

`;
