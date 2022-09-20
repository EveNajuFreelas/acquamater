import { Typography } from "@mui/material";
import { colors } from '../../theme/colors';
import { CardBox, QuoteContainer, DescriptionContainer } from "./style";

export const PersonQuoteCard = ({ quote, personImg, name, description, extraContent }) => (
    <CardBox>
        <QuoteContainer>
            <Typography variant="body1bold" color={colors.blueLighter} paddingBottom="10px">
                {quote}
            </Typography>
        </QuoteContainer>
        <img width="110px" src={personImg} alt={name} />
        <DescriptionContainer>
            <Typography variant="body1" color={colors.blueLighter}>
                {name}
            </Typography>
            {extraContent && extraContent}
            <Typography variant="body1">
                {description}
            </Typography>
        </DescriptionContainer>
    </CardBox>
);