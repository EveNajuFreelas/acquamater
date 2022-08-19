import { Divider, Grid } from "@mui/material";
import { FooterContainer, SectionChild, SectionTitle } from "./styles";
import { navigation } from "../../utils/navigation";

const Footer = ()  => {
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
            <Divider light variant="middle" sx={{ borderColor: '#999', width: '100%', marginY: 2 }} />
        </FooterContainer>
    );
}

export default Footer;