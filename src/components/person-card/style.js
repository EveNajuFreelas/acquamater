import { Button, Divider } from "@mui/material";
import styled from "styled-components";
import { colors } from "../../theme/colors";

export const LearnMoreButton = styled(Button)`
    background-color: #E3E6EA;
    color: ${colors.blueLighter};
    padding-right: 15px;

    &:hover {
        color: white;
    }
`;

export const InfoDivider = styled(Divider)`
    margin: 20px 0;
`;