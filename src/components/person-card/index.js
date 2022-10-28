import { Box, Typography } from '@mui/material';
import { colors } from '../../theme/colors';
import { InfoDivider, LearnMoreButton } from './style';
import AddIcon from '@mui/icons-material/Add';

export const PersonCard = ({ name, img, country, description, personClick, section, id }) => (
    <Box width="200px" height="350px" marginX="30px" key={id}>
        <img width="150px" src={img} alt={name} />
        <Box height="65px" display="flex" alignItems="center">
            <Typography variant="h3" color={colors.blueLighter} width="80%" margin="auto">{name}</Typography>
        </Box>
        <InfoDivider />
        {country && <Typography variant="body1bold">{country}</Typography>}
        <Typography height="120px" textOverflow="ellipsis" overflow="hidden">{description}</Typography>
        <br />
        <LearnMoreButton
            onClick={() => personClick(section, id)}
        >
            <AddIcon />
            Saiba Mais
        </LearnMoreButton>
    </Box>
);