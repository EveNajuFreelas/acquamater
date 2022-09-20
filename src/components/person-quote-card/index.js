import { Typography } from "@mui/material";
import { colors } from '../../theme/colors';
import { CardBox, QuoteContainer, DescriptionContainer } from "./style";

export const PersonQuoteCard = ({ quote, personImg, name, description, extraContent, horizontal }) => {
    const gradient = horizontal ? '90deg, #EDEEEF 55%, #E3E4E3 45%' : '180deg, #EDEEEF 210px, #E3E4E3 190px';

    const style = {
        width: horizontal ? '700px' : '350px',
        height: horizontal ? '300px' : '400px',
        background: `linear-gradient(${gradient})`,
        display: horizontal ? 'flex' : 'block',
        margin: horizontal ? 'auto' : '50px 20px',
    }
    
    return (
    <CardBox sx={{ ...style }}>
        <QuoteContainer width={horizontal ? '55%' : 'auto'} height={horizontal ? '300px' : '150px'}>
            <Typography variant="body1bold" color={colors.blueLighter} paddingBottom="10px">
                {quote}
            </Typography>
        </QuoteContainer>
        {!horizontal && <img width="110px" src={personImg} alt={name} />}
        <DescriptionContainer width={horizontal ? '45%' : 'auto'} height={horizontal ? '300px' : '100px'}>
            {horizontal && <img width="110px" src={personImg} alt={name} />}
            <Typography variant="body1" color={colors.blueLighter}>
                {name}
            </Typography>
            {extraContent && extraContent}
            <Typography variant="body1">
                {description}
            </Typography>
        </DescriptionContainer>
    </CardBox>
)};