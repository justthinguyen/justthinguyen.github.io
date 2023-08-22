import { Helmet } from 'react-helmet-async';
import { Grid } from '@mui/material';
import { fullName } from '../contents/MyInfo';

export default function ProjectPage() {
    const pageName = 'Projects';
    return (
        <>
            <Helmet>
                <title>{fullName} - {pageName}</title>
            </Helmet>
            <Grid container spacing={2}>
                <Grid item xs={0} md={1} lg={1}></Grid>
                <Grid item xs={12} md={10} lg={10} sx={{ p: 5 }}>

                </Grid>
                <Grid item xs={0} md={1} lg={1}></Grid>
            </Grid>
        </>
    );
}