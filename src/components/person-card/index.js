import { Box, Typography } from '@mui/material';
import { colors } from '../../theme/colors';
import { InfoDivider, LearnMoreButton } from './style';
import AddIcon from '@mui/icons-material/Add';

export const PersonCard = ({ name, img, country, description }) => (
    <Box width="200px" height="400px" marginX="30px">
        <img width="150px" src={img} alt={name} />
        <Typography variant="h3" color={colors.blueLighter} height="50px">{name}</Typography>
        <InfoDivider />
        {country && <Typography variant="body1bold">{country}</Typography>}
        <Typography height="150px">{description}</Typography>
        <br />
        <LearnMoreButton
            onClick={() => alert(`Clicked on ${name}`)}
        >
            <AddIcon />
            Saiba Mais
        </LearnMoreButton>
    </Box>
);