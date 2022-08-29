import { Typography } from '@mui/material';
import styled from 'styled-components';

export const ContainerColumn = styled.div`
  display: flex;
  gap: 60px;
  flex-direction: ${(props) => props.reverse && "row-reverse"};
  justify-content: center;
  margin: 50px 0px;
  align-items: center;
`;

export const ImageColumn = styled.div``;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 40%;

  button {
    width: 150px;
    font-size: 15px;
    padding: 10px;
    border-radius: 50px;
  }
`;

export const TitleSection = styled.div`
  gap: 10px;
`;

export const TitleText = styled(Typography)`
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

export const ContentText = styled(Typography)`
  line-height: 35px;
  letter-spacing: 2px;
  font-weight: lighter;
`;
