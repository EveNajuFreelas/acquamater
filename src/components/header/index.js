import { useState } from 'react';
import {
	AppBar,
	Box,
	Container,
	Drawer,
	IconButton,
	List,
	Toolbar,
	useMediaQuery,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { navigation } from '../../utils/navigation';
import { CustomMenuItem } from './menu-item';
import { CustomListItem } from './list-items';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
	const navigate = useNavigate();
	const isDesktop = useMediaQuery('(min-width:1024px)', { noSsr: true });
	const [openDrawer, setOpenDrawer] = useState(false);

	const handleRedirect = url => {
		navigate(url);
	};

	const handleDrawer = () => {
		setOpenDrawer(curr => !curr);
	};

	return (
		<AppBar position='static' sx={{ backgroundColor: 'white' }}>
			<Container maxWidth='lg'>
				<Toolbar
					disableGutters
					sx={{
						my: 2,
						alignItems: 'flex-end',
						justifyContent: 'center',
					}}
				>
					{!isDesktop && (
						<>
							<IconButton
								size='large'
								sx={{ mr: 2, width: '50px' }}
								onClick={handleDrawer}
							>
								<MenuIcon />
							</IconButton>
							<Drawer
								anchor='left'
								open={openDrawer}
								onClose={handleDrawer}
							>
								<List>
									{navigation.map((nav, index) => (
										<CustomListItem
											key={index}
											nav={nav}
											handleNav={prop => {
												handleRedirect(prop);
												handleDrawer();
											}}
										/>
									))}
								</List>
							</Drawer>
						</>
					)}

					<Box
						onClick={() => {
							navigate('/');
						}}
					>
						<img src='/acquamater/acquamater-logo.svg' alt='logo' style={{ marginRight: '40px'}} />
					</Box>
					
					<Box style={{ display: 'flex', alignItems: 'end'}}>

					{isDesktop &&
						navigation.map(nav => (
							<CustomMenuItem
								nav={nav}
								handleRedirect={handleRedirect}
							/>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
