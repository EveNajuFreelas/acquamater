import { Typography, Grid, Box } from "@mui/material";
import styled from "styled-components";
import { colors } from '../../theme/colors';

export const TextOrganism = styled(Typography)`
    text-align: center;
    margin-bottom: 20px;
`;

export const SectionBlueTitle = styled(Typography)`
    background-color: ${colors.blueLighter};
    color: white;
    padding: 10px 60px;
    border-radius: 35px;
    margin-bottom: 30px;
    width: fit-content;
`;

export const ParceirosContainer = styled.div`
    padding: 100px 10%;
    background-size: 100%;
    background-image: url('/acquamater/quem-pensa-faz/parceiros-bg.png');
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const ParceiroImg = styled(({ src }) => (
    <Grid item sm={1} md={2.3}>
        <img src={src} alt="parceiro" width="180px" height="180px" />
    </Grid>))``;

// Modal Styles

export const ModalContainer = styled(Box)`
    width: 60%;
    height: 80%;
    background-color: white;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 20px;
    overflow-y: auto;

    box-shadow: 10px 10px gray;
`;

export const CloseButton = styled.button`
    border-radius: 50px;
    border: none;
    height: 20px;
    width: 20px;
    text-align: center;
`;
