import { Grid } from "@mui/material";
import { FooterContainer, SectionChild, SectionTitle, SectionDivider } from "./styles";
import { Instagram, YouTube, LinkedIn } from '@mui/icons-material';
import { navigation } from "../../utils/navigation";

const Footer = ()  => {
    const IconStyle = { 
        border: '2px solid white', 
        borderRadius: '50%', 
        p: 0.5,
        m: 1, 
        color: 'white',
        fontSize: '20px',
    };

    const handleClick = (url) => {
        window.location.href = url;
    }

    return (
        <FooterContainer container spacing={2}>
            {navigation.map(nav => (
                nav.subelements.length > 0 &&
                <Grid item xs={2}>
                    <SectionTitle>
                        {nav.name}
                    </SectionTitle>
                    {nav.subelements.map(el => (
                        <SectionChild>{el.name}</SectionChild>
                    ))}
                </Grid>
            ))}
            <SectionDivider variant="middle" />
            <Grid xs={3}>
                <img src='acquamater-logo-white.svg' alt='logo' />
            </Grid>
            <Grid xs={3} sx={{ alignItems: 'center', display: 'flex' }}>
                <SectionTitle as='a' href="mailto:contato@acquamater.com">
                    contato@acquamater.com
                </SectionTitle>
            </Grid>
            <Grid xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
                <SectionTitle>Siga-nos</SectionTitle>
                <Instagram sx={IconStyle} onClick={() => handleClick("https://www.instagram.com/acqua_mater/")} />
                <YouTube sx={IconStyle} onClick={() => handleClick("https://www.youtube.com/channel/UCwYmoILB7yNeTUR3PYZ5rbA")} /> 
                <LinkedIn sx={IconStyle} onClick={() => handleClick("https://www.linkedin.com/in/patricia-furtado-de-mendonça/")} />
            </Grid>
        </FooterContainer>
    );
}

export default Footer;