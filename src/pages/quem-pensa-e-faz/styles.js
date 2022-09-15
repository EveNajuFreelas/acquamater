import { Breadcrumbs, Typography, Grid, Box } from "@mui/material";
import styled from "styled-components";
import { colors } from '../../theme/colors';

export const OrgSectionContainer = styled.div`
    margin-top: -65px;
    padding: 100px 0;
    background-image: url('quem-pensa-faz/quem-pensa-faz-section-1.png');
    background-size: 100%;
    background-repeat: no-repeat;
    height: 28.2em;
`;

export const TextOrganism = styled(Typography)`
    text-align: center;
    margin-bottom: 20px;
`;

export const AdvisoryBoardSectionContainer = styled.div`
    padding: 100px 10%;
    background-size: 100% 100%;
    background-image: url('advisory-board-bg.png');
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const SectionBlueTitle = styled(Typography)`
    background-color: ${colors.blueLighter};
    color: white;
    padding: 10px 60px;
    border-radius: 35px;
    margin-bottom: 30px;
`;

export const ParceirosContainer = styled.div`
    padding: 100px 10%;
    background-size: 100%;
    background-image: url('quem-pensa-faz/parceiros-bg.png');
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const ParceiroImg = styled(({ src }) => (
    <Grid item xs>
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
