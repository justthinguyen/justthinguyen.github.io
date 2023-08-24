import { Helmet } from 'react-helmet-async';
import { Grid, Typography } from '@mui/material';
import { getPageTitle } from '../siteInfo';
import { Title } from '../components/CustomizedMUI';

export default function Blog() {
    const pageName = 'Thoughts';
    return (
        <>
            <Helmet>
                <title>{getPageTitle(pageName)}</title>
            </Helmet>
            <Grid container spacing={2}>
                <Grid item xs={0} md={1} lg={1}></Grid>
                <Grid item xs={12} md={10} lg={10} sx={{ p: 5 }}>
                    <Title>Oh hi again! 😃</Title>
                    <Typography>
                        <p>
                            Thi just has too much thoughts to share at the moment, but she'll be dishing out something useful here soon!
                        </p>
                    </Typography>
                </Grid>
                <Grid item xs={0} md={1} lg={1}></Grid>
            </Grid>
        </>
    );
}