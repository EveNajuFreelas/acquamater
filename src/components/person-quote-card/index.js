import { Typography } from "@mui/material";
import { colors } from '../../theme/colors';
import { CardBox, QuoteContainer, DescriptionContainer } from "./style";

export const PersonQuoteCard = ({ quote, personImg, name, description }) => (
    <CardBox>
        <QuoteContainer>
            <Typography variant="body1bold" color={colors.blueLighter}>
                {quote}
            </Typography>
        </QuoteContainer>
        <img width="110px" src={personImg} alt={name} />
        <DescriptionContainer>
            <Typography variant="body1" color={colors.blueLighter}>
                {name}
            </Typography>
            <Typography variant="body1">
                {description}
            </Typography>
        </DescriptionContainer>
    </CardBox>
);