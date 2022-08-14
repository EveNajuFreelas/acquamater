import { useState } from "react";
import { AppBar, Box, Container, Toolbar, Menu, MenuItem, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { navigation } from "../../utils/navigation";

const Header = () => {
   const navigate = useNavigate();
   const [activeFacet, setActiveFacet] = useState(null);
   const [anchorMenu, setAnchorMenu] = useState(null);

   const handleRedirect = (url) => {
      navigate(url);
   }

   const handleHover = (element, isHovering, event) => {
      event.preventDefault();
      if(isHovering) {
         setActiveFacet(element.id);
         setAnchorMenu(event.currentTarget);
      } else {
         setActiveFacet(null);
         setAnchorMenu(null);
      }
   }

   return (
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
         <Container maxWidth="md">
            <Toolbar disableGutters sx={{ my: 2, alignItems: "flex-end" }}>
               <Box>
                  <img src="printed-logo.png" alt="logo" />
               </Box>

               {navigation.map((nav) => (
                  <>
                     <Link
                        variant="body1"
                        underline="none"
                        key={nav.id} 
                        sx={{ px: 1, textTransform: 'none' }}
                        onClick={() => handleRedirect(nav.url)}
                        onMouseEnter={(e) => handleHover(nav, true, e)}
                     >
                        <p>{nav.name}</p>
                     </Link>
                     {nav.subelements.length > 0 ? 
                     <Menu
                        key="menuDropdown"
                        open={activeFacet === nav.id}
                        anchorEl={anchorMenu}
                        MenuListProps={{ onMouseLeave: (e) => handleHover(null, false, e) }}
                     >
                        {nav.subelements.map((el) => (
                           <MenuItem 
                              key={el.id} 
                              onClick={() => handleRedirect(el.url)}
                           >
                              {el.name}
                           </MenuItem>
                        ))}
                     </Menu> : null}
                  </>
               ))}
            </Toolbar>
         </Container>
      </AppBar>
   );
};

export default Header;
