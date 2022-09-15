import { Grid, Link, Typography } from '@mui/material';
import { HeadBreadcrumbs, HeadContainer } from './style';

export const Head = ({ breadcrumbs, title, backgroundImage, children }) => (
    <HeadContainer bgImg={backgroundImage}>
        <Grid container>
            <Grid item sm={5}>
                <HeadBreadcrumbs>
                    {breadcrumbs.map(bc => (
                        <Link underline="hover" color="inherit" href={bc.url}>{bc.name}</Link>
                    ))}
                    <Typography color="white">{title}</Typography>
                </HeadBreadcrumbs>

                <Typography variant="h1" color="white" textTransform="capitalize">{title}</Typography>
            </Grid>
            <Grid item sm={7}>
                {children}
            </Grid>
        </Grid>
    </HeadContainer>
)