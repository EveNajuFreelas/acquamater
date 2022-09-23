import { Grid } from '@mui/material';
import {
	FooterContainer,
	SectionChild,
	SectionTitle,
	SectionDivider,
} from './styles';
import { Instagram, YouTube, LinkedIn } from '@mui/icons-material';
import { navigation } from '../../utils/navigation';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
	const navigate = useNavigate();

	const IconStyle = {
		border: '2px solid white',
		borderRadius: '50%',
		p: 0.5,
		m: 1,
		color: 'white',
		fontSize: '20px',
	};

	const handleClick = url => {
		navigate(url);
	};

	return (
		<FooterContainer container spacing={2}>
			{navigation.map(
				nav =>
					nav.subelements.length > 0 && (
						<Grid item md={2} key={nav.id}>
							<SectionTitle
								onClick={() => handleClick(nav.url)}
								key={nav.id}
							>
								{nav.name}
							</SectionTitle>
							{nav.subelements.map(el => (
								<SectionChild
									onClick={() => handleClick(el.url)}
									key={el.id}
								>
									{el.name}
								</SectionChild>
							))}
						</Grid>
					)
			)}
			<SectionDivider variant='middle' />
			<Grid item xs={3}>
				<img src='/acquamater-logo-white.svg' alt='logo' />
			</Grid>
			<Grid item md={3} sx={{ alignItems: 'center', display: 'flex' }}>
				<SectionTitle as='a' href='mailto:contato@acquamater.com'>
					contato@acquamater.com
				</SectionTitle>
			</Grid>
			<Grid item md={3} sx={{ display: 'flex', alignItems: 'center' }}>
				<SectionTitle>Siga-nos</SectionTitle>
				<Instagram
					sx={IconStyle}
					onClick={() =>
						handleClick('https://www.instagram.com/acqua_mater/')
					}
				/>
				<YouTube
					sx={IconStyle}
					onClick={() =>
						handleClick(
							'https://www.youtube.com/channel/UCwYmoILB7yNeTUR3PYZ5rbA'
						)
					}
				/>
				<LinkedIn
					sx={IconStyle}
					onClick={() =>
						handleClick(
							'https://www.linkedin.com/in/patricia-furtado-de-mendonça/'
						)
					}
				/>
			</Grid>
		</FooterContainer>
	);
};

export default Footer;
