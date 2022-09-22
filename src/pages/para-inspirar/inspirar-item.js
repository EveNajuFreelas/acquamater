import { Box, Grid, Typography } from "@mui/material";
import { InspirarItemContainer } from "./styles";

export const InspirarItem = ({ img, date, author, name }) => (
    <InspirarItemContainer container>
        <Grid item xs={1}>
            <img src={img} alt={name} width="50px" />
        </Grid>
        <Grid item xs={10}>
            <Box display="flex" mb="5px">
                <Typography variant="body2" mr="50px">{date}</Typography>
                <Typography variant="body2">{author}</Typography>
            </Box>
            <Typography variant="body1bold">{name}</Typography>
        </Grid>
    </InspirarItemContainer>
)