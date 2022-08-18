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

	const handleHover = (element, isHovering, event) => {
		event.preventDefault();
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
					sx={{
						my: 2,
						alignItems: 'flex-end',
						justifyContent: 'space-between',
					}}
				>
					<Logo src='printed-logo.png' alt='logo' />

					{navigation.map(nav => (
						<>
							<Link
								variant='body1'
								underline='none'
								key={nav.id}
								sx={{
									px: 1,
									textTransform: 'none',
									cursor: 'pointer',
								}}
								onClick={() => handleRedirect(nav.url)}
								onMouseEnter={e => handleHover(nav, true, e)}
							>
								<p>{nav.name}</p>
							</Link>
							{nav.subelements.length > 0 ? (
								<Menu
									key='menuDropdown'
									open={activeFacet === nav.id}
									anchorEl={anchorMenu}
									MenuListProps={{
										onMouseLeave: e =>
											handleHover(null, false, e),
									}}
								>
									{nav.subelements.map(el => (
										<MenuItem
											key={el.id}
											onClick={() =>
												handleRedirect(
													`${nav.url + el.url}`
												)
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
