import { Grid } from '@mui/material';
import styled from 'styled-components';

const FooterContainer = styled((props) => <Grid {...props} />)`
    position: fixed;
    bottom: 0;
    display: flex;
    min-height: 200px;
    justify-content: center;
    padding: 20px 110px;
    background-image: url("footer-bg.svg");
    margin: 0;
    widht: 100%;
`;

const SectionTitle = styled('p')`
    color: #CCE70B;
`;

const SectionChild = styled('p')`
    color: #999999;
    font-size: 14px;
`;

export {
    FooterContainer,
    SectionTitle,
    SectionChild
}