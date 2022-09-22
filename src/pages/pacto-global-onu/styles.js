import { Box } from "@mui/system";
import styled  from 'styled-components';

export const ObjetivosContainer = styled(Box)`
    background-image: url('/objetivos-ods-bg.png');
    background-size: 100% 100%;
    padding: 10%;
`;

export const LinksContainer = styled(Box)`
    padding: 30px 15%;
    background-color: "#ECE9EC";

    & a {
        text-decoration: none;
        color: grey;
    }
`;