import { Helmet } from 'react-helmet-async';
import { Box, Grid } from '@mui/material';
import { Intro } from '../contents/MyInfo';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Thi Nguyen - Home Page</title>
                <meta name='description' content='Thi Nguyen Personal Website home page' />
            </Helmet>
            <Grid container spacing={2}>
                <Grid item xs={0} md={0.5} lg={0.5}></Grid>
                <Grid item xs={12} md={7} lg={7} sx={{ p: 5 }}>
                    <Intro />
                </Grid>
                <Grid className='Thi-profile-pic' container item xs={12} md={4.5} lg={4.5} sx={{ justifyContent: 'center' }}>
                    <Box
                        component="img"
                        sx={{
                            maxHeight: { xs: '80%', md: '60%' },
                            maxWidth: { xs: '90%', md: '100%' },
                            marginTop: { xs: '0', md: '10%', lg: '10%' },
                            borderRadius: '5%'
                        }}
                        alt="ThiNguyen-profile-pic"
                        src="img/ThiNguyen-08-2023.jpeg"
                    >
                    </Box>

                </Grid>

            </Grid>
        </>


    );
}
