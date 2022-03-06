import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { navigation } from '../../utils/navigation';

const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
            <Container maxWidth="md">
                <Toolbar 
                    disableGutters
                    sx={{ my: 2, alignItems: 'flex-end' }}
                >
                    <Box>
                        <img src="printed-logo.png" alt="logo" />
                    </Box>

                    {navigation.map(nav => (
                        <Box key={nav.id} sx={{ px: 2, mb: 1 }}>
                            <Link to={nav.url}>{nav.name}</Link>
                        </Box>
                    ))}
                </Toolbar>
            </Container>
        </AppBar>);
}

export default Header;