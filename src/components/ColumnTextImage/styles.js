import styled from "styled-components";

export const ContainerColumn = styled.div`
   display: flex;
   gap: 80px;
   flex-direction: ${(props) => props.reverse && "row-reverse"};
   justify-content: center;
   padding: 50px 10%;
   background-image: ${(props) => `url(${props.backgroundImage})`};
   background-size: cover;
`;

export const ImageColumn = styled.div`
   margin-top: 15px;
   width: 30%;
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
