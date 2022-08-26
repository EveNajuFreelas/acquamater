import styled from "styled-components";

export const ContainerColumn = styled.div`
   display: flex;
   gap: 80px;
   flex-direction: ${(props) => props.reverse && "row-reverse"};
   justify-content: center;
   margin: 50px 0px;
`;

export const ImageColumn = styled.div`
   margin-top: 15px;
   max-width: 30vw;
   img {
      width: 100%;
   }
`;
export const TextColumn = styled.div`
   width: 50%;
   gap: 20px;
`;

export const ButtonSection = styled.div`
   margin-top: 40px;
   display: flex;
   flex-direction: column;

   Button {
      margin-top: 15px;
      width: 150px;
      font-size: 15px;
      padding: 10px;
   }
`;
