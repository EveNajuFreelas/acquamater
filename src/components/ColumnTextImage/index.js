import React, { Children } from 'react';
import {
  ContainerColumn,
  ImageColumn,
  TextColumn,
  ContentText,
  TitleText,
  SubtitleText,
  TitleSection,
} from "./styles";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const ColumnTextImage = ({
  image,
  children,
  title,
  subtitle,
  button,
  reverse,
  pathName,
}) => {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate(pathName);
  };

  return (
    <ContainerColumn reverse={reverse}>
      <ImageColumn>
        <img alt="people_circle" src={image} />
      </ImageColumn>
      <TextColumn>
        <TitleSection>
          <TitleText variant="h3" color="primary">
            {title}
          </TitleText>
          {subtitle && (
            <Typography variant="h6" sx={{ color: "text.main" }}>
              {subtitle}
            </Typography>
          )}
        </TitleSection>

        <ContentText variant="body1" sx={{ color: "text.main" }}>
          {children}
        </ContentText>
        {button && (
          <Button startIcon={<AddIcon />} onClick={() => routeChange()}>
            Saiba Mais
          </Button>
        )}
      </TextColumn>
    </ContainerColumn>
  );
};

export default ColumnTextImage;
