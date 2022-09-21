import { Box, Typography } from "@mui/material";
import { colors } from "../../theme/colors";

export const CaseCard = ({ coverImg, project, client, where, when}) => (
    <Box>
        <img src={coverImg} alt={project} width="100%" />
        <Typography variant="body1" color={colors.blueLighter} my="20px">
            Projeto / evento: <br />
            {project} <br/><br/>
            Cliente: <br/>
            {client} <br/><br/>
            Onde: <br/>
            {where}<br/><br/>
            Quando: <br/>
            {when}
        </Typography>
    </Box>
);