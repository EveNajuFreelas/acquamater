import { Button, Typography, Box } from "@mui/material";
import { colors } from "../../theme/colors";
import { BoxContainer } from "./styles";
import AddIcon from '@mui/icons-material/Add';

export const CaseCard = ({ coverImg, project, client, where, when, saibaMaisFunction }) => (
    <BoxContainer>
        <Box height="250px" backgroundColor="white" style={{ marginTop: '20px'}}>
            <img src={coverImg} alt={project} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
        </Box>
        <Box my="20px" px="5px">
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
            <Button 
                onClick={saibaMaisFunction} 
                style={{ padding: '8px 18px 8px 12px', position: 'absolute', bottom: 0 }}
            >
                <AddIcon />
                Saiba Mais
            </Button>
        </Box>
    </BoxContainer>
);