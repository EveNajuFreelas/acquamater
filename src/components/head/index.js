import { Container, Grid, Link, Typography } from '@mui/material';
import { HeadBreadcrumbs, HeadContainer } from './style';

export const Head = ({ breadcrumbs, title, backgroundImage, children, ...props }) => (
	<HeadContainer {...props}>
		<img 
			src={backgroundImage} 
			alt="page head" 
			width="100%" 
			style={{
				position: 'absolute',
				zIndex: -1,
				height: 'auto',
			}}
		/>
		<Container maxW='lg' style={{ paddingTop: '30px' }}>
			<Grid container>
					<Grid item sm={4} style={{ margin: 'auto' }}>
						<HeadBreadcrumbs separator=">">
							{breadcrumbs.map(bc => (
								<Link underline='hover' color='inherit' href={bc.url}>
									{bc.name}
								</Link>
							))}
							<Typography color='white'>{title}</Typography>
						</HeadBreadcrumbs>

						<Typography
							variant='h1'
							color='white'
							textTransform='uppercase'
						>
							{title}
						</Typography>
					</Grid>
					<Grid item sm={6} sx={{ paddingTop: '40px' }}>
						{children}
					</Grid>
			</Grid>
		</Container>
	</HeadContainer>
);
