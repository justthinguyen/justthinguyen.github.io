import { Helmet } from 'react-helmet-async';
import { Grid, Typography } from '@mui/material';
import { fullName } from '../contents/MyInfo';
import { Title, PlainLink } from '../components/CustomizedMUI';

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
                    <Title>Hey hey there! 😃</Title>
                    <Typography>
                        <p>I'm currently knee-deep in a whirlwind of projects involving TypeScript, React.js, and the magical d3.js, and I can hardly wait to spill the beans on them! 🌟 </p>

                        <p> One of these exciting projects involves revamping my old college-time gem, the one and only "MyTimeMaster" – a time tracking application that's about to get a serious glow-up! 🕒✨
                            (Curious about its humble beginnings? Swing by my nostalgia-inducing <PlainLink href='https://mason.gmu.edu/~tnguy138/#projects' target='_blank'>"good-old-day" website</PlainLink> to take a trip down memory lane.) </p>

                        <p>So, what's the scoop, you ask? Well, stay tuned, because the fun's just getting started! 🎉 </p>

                        <p> ~ Thi ~</p>
                    </Typography>
                </Grid>
                <Grid item xs={0} md={1} lg={1}></Grid>
            </Grid>
        </>
    );
}