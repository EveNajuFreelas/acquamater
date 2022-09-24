import {
	AppBar,
	Box,
	Container,
	Toolbar,
	useMediaQuery,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { navigation } from '../../utils/navigation';
import { CustomMenuItem } from './menu-item';

const Header = () => {
	const navigate = useNavigate();
	const isDesktop = useMediaQuery('(min-width:600px)', { noSsr: true });

	const handleRedirect = url => {
		navigate(url);
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
					<Box onClick={() => { navigate('/') }}>
						<img src='/acquamater/acquamater-logo.svg' alt='logo' />
					</Box>

					{isDesktop && navigation.map(nav => (
						<CustomMenuItem nav={nav} handleRedirect={handleRedirect}  />
					))}
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
