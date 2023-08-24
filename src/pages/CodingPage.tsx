import { Helmet } from 'react-helmet-async';
import { Grid, Typography } from '@mui/material';
import { fullName } from '../contents/MyInfo';
import { Title } from '../components/CustomizedMUI';

export default function CodingPage() {
    const pageName = 'Coding';
    return (
        <>
            <Helmet>
                <title>{fullName} - {pageName}</title>
            </Helmet>
            <Grid container spacing={2}>
                <Grid item xs={0} md={1} lg={1}></Grid>
                <Grid item xs={12} md={10} lg={10} sx={{ p: 5 }}>
                    <Title>Hey there! 😃</Title>
                    <Typography>
                        <p>
                            I'm cooking up a super exciting course on crafting cutting-edge web applications with React.js, TypeScript, and the fantastic Material-UI, plus a sprinkle of other nifty technologies! 🚀
                            I'm putting in some serious elbow grease, and I can't wait to unleash it upon the world very, very soon! Stay tuned! </p>

                        <p> ~ Thi ~</p>
                    </Typography>
                </Grid>
                <Grid item xs={0} md={1} lg={1}></Grid>
            </Grid>
        </>
    );
}