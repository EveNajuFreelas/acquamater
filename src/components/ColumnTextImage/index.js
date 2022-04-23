import React from "react";
import { ContainerColumn, ImageColumn, TextColumn } from "./styles";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ColumnTextImage = ({ image, content, title, subtitle, footer, button, reverse }) => {
   return (
      <ContainerColumn reverse={reverse}>
         <ImageColumn>
            <img alt="people_circle" src={image} />
         </ImageColumn>
         <TextColumn>
            <Typography variant="h2" color="primary">
               {title}
            </Typography>
            <Typography variant="body1">
               <Typography variant="body2">{subtitle}</Typography>
               {content}
            </Typography>
            <Typography variant="body2">{footer}</Typography>

            {button && <Button startIcon={<AddIcon />}>Saiba Mais</Button>}
         </TextColumn>
      </ContainerColumn>
   );
};

export default ColumnTextImage;
