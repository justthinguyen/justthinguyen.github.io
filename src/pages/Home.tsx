import { Box, Grid } from '@mui/material';
import { Intro } from '../contents/MyInfo';

export default function Home() {
    return (

        <Grid container spacing={2}>
            <Grid item xs={0} md={0.5} lg={0.5}></Grid>
            <Grid item xs={12} md={7} lg={7} sx={{ p: 5 }}>
                <Intro />
            </Grid>
            <Grid item xs={12} md={4.5} lg={4.5}>
                <Box>PICTIURE</Box>

            </Grid>

        </Grid>



    );
}
