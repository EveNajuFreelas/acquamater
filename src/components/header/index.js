import { useState } from 'react';
import {
	AppBar,
	Box,
	Container,
	Toolbar,
	Menu,
	MenuItem,
	Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { navigation } from '../../utils/navigation';
import { Logo } from './styles';

const Header = () => {
	const navigate = useNavigate();
	const [activeFacet, setActiveFacet] = useState(null);
	const [anchorMenu, setAnchorMenu] = useState(null);

	const handleRedirect = url => {
		navigate(url);
	};

	const handleHover = (event, element, isHovering = false) => {
		if (isHovering) {
			setActiveFacet(element.id);
			setAnchorMenu(event.currentTarget);
		} else {
			setActiveFacet(null);
			setAnchorMenu(null);
		}
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
					<Box>
						<img src='acquamater-logo.svg' alt='logo' />
					</Box>

					{navigation.map(nav => (
						<>
							<Link
								variant='body1'
								underline='none'
								key={nav.id}
								sx={{ px: 1, textTransform: 'none' }}
								onClick={() => handleRedirect(nav.url)}
								onMouseEnter={e => handleHover(e, nav, true)}
							>
								<p>{nav.name}</p>
							</Link>
							{nav.subelements.length > 0 ? (
								<Menu
									key='menuDropdown'
									open={activeFacet === nav.id}
									anchorEl={anchorMenu}
									MenuListProps={{
										onMouseLeave: handleHover,
									}}
									sx={{
										marginTop: '15px',
										borderTopLeftRadius: 0,
										borderTopRightRadius: 0,
									}}
								>
									{nav.subelements.map(el => (
										<MenuItem
											key={el.id}
											onClick={() =>
												handleRedirect(el.url)
											}
										>
											{el.name}
										</MenuItem>
									))}
								</Menu>
							) : null}
						</>
					))}
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
