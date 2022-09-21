import { Box, Divider } from "@mui/material";
import styled from "styled-components";
import { colors } from '../../theme/colors';

export const CulturaOceanicaContainer = styled(Box)`
    background-image: url('cultura-oceanica-bg.png');
    background-size: 100%;
    height: 200vh;
    padding: 0 10%;
    margin-bottom: 5%;
`;

export const LinksDivider = styled((props) => <Divider variant="middle" color={colors.blueLighter} {...props} />)`
    width: 100%;
    margin: 40px 0;
`;