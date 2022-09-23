import { Button, Typography, Box } from "@mui/material";
import { colors } from "../../theme/colors";
import { BoxContainer } from "./styles";

export const CaseCard = ({ coverImg, project, client, where, when, saibaMaisFunction }) => (
    <BoxContainer>
        <Box height="250px" backgroundColor="white">
            <img src={coverImg} alt={project} style={{height: '100%', width: '100%', objectFit: 'contain'}} />
        </Box>
        <Box my="10px" px="5px">
            <Typography variant="body1" color={colors.blueLighter} mb="20px">
                Projeto / evento: <br />
                <Typography variant="body3">{project}</Typography> <br/><br/>
                Cliente: <br/>
                <Typography variant="body3">{client}</Typography> <br/><br/>
                Onde: <br/>
                <Typography variant="body3">{where}</Typography> <br/><br/>
                Quando: <br/>
                <Typography variant="body3">{when}</Typography>
            </Typography>
            <Button onClick={saibaMaisFunction}>Saiba Mais</Button>
        </Box>
    </BoxContainer>
);