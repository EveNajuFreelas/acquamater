import React from "react";
import { ContainerColumn, ImageColumn, TextColumn, ButtonSection } from "./styles";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const ColumnTextImage = ({ image, content, title, buttons, reverse }) => {
   const navigate = useNavigate();

   return (
      <ContainerColumn reverse={reverse}>
         <ImageColumn>
            <img alt="people_circle" src={image} />
         </ImageColumn>
         <TextColumn>
            {title && <Typography variant="h2" color="primary">
               {title}
            </Typography>}
            <Typography variant="body1">{content}</Typography>
            <ButtonSection>
               {buttons?.map(
                  ({ title, url }) => (
                     <Button 
                        onClick={() => navigate(url)}
                        style={{ width: 'fit-content' }}
                     >
                        <AddIcon />
                        {title}
                     </Button>
                  ))}
            </ButtonSection>
         </TextColumn>
      </ContainerColumn>
   );
};

/**
 * `buttons` prop example:
 * [{
 *    title: 'Saiba mais',
 *    url: '/saiba-mais',
 * }]
 */

export default ColumnTextImage;
