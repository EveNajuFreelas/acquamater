import { Box, Divider, Typography } from "@mui/material";
import styled from "styled-components";

export const BackgroundBox = styled(Box)`
    background-image: url(${(props) => props.backgroundImg});
    background-size: cover;
    padding: 50px 20%;
    height: 310px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const QuoteTitle = styled(Typography)`
    color: white;
    padding: 20px 0;
    text-align: center;
`;

export const QuoteDivider = styled(Divider)`
    border-color: #7FC31B;
    width: 80%;
`;

export const QuoteAuthor = styled(Typography)`
    color: white;
    padding: 20px 0;
    display: flex;

    img {
        margin-left: 15px;
        height: 20px;
    }
`;