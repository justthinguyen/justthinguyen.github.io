import { Helmet } from 'react-helmet-async';
import { Grid, Typography, CardMedia, CardActionArea, CardContent, Card } from '@mui/material';
import { getPageTitle } from '../siteInfo';

const TodoAppCard = () => (
    <Card className='ToolkitCard'>
        <CardActionArea>
            <CardMedia
                component="img"
                height="400px"
                src="img/Toododo-image.png"
                alt="Toododo"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Toododo - not your average Todo app.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Add your todo items, drag and drop them to prioritize the items, mark them completed, remove an item or remove all.
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);

export default function ToolkitsPage() {
    const pageName = 'Toolkits';
    return (
        <>
            <Helmet>
                <title>{getPageTitle(pageName)}</title>
            </Helmet>
            <Grid container spacing={2}>
                <Grid item xs={0} md={1} lg={1}></Grid>
                <Grid item xs={12} md={10} lg={10} sx={{ p: 5 }}>
                    <TodoAppCard />
                </Grid>
                <Grid item xs={0} md={1} lg={1}></Grid>
            </Grid>
        </>

    );
}