import { Box, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import { colors } from "../../theme/colors";

export const InspirarHeader = ({ sectionName, subtitle, img, hasTopDivider }) => (
    <>
        {hasTopDivider && <Box my="40px">
            <Divider variant="middle" w="100%" color={colors.blueLighter} />
        </Box>}
        <Grid container spacing={2}>
            <Grid item xs={1}>
                <img src={img} alt={sectionName} width="100px" />
            </Grid>

            <Grid item xs={10} mx="30px">
                <Box display="flex" mx="15px" alignItems="end">
                    <Typography variant="h3" color={colors.blueLighter} mr="10px">
                        {sectionName}
                    </Typography>
                    <Typography variant="body1">{subtitle}</Typography>
                </Box>
                <Divider variant="middle" w="100%" color="#7FC31B" />
                <Stack direction="row" spacing={2} mx="15px" my="10px">
                    <Chip label="Ciência, Pesquisa e Tecnologia" avatar={<img src="/para-inspirar/science-icon.png" alt="Science" />} />
                    <Chip label="Relação, Conexão e Emoção" avatar={<img src="/para-inspirar/heart-icon.png" alt="Heart" />} />
                </Stack>
            </Grid>
        </Grid>

        <Box my="40px">
            <Divider variant="middle" w="100%" color={colors.blueLighter} />
        </Box>
    </>
);