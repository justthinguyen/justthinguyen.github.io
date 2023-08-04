import { styled } from '@mui/system';
import { Paper, Typography } from '@mui/material';

const BottomPaper = styled(Paper)({
    display: 'flex',
    'text-align': 'center',
    padding: '3% 10%',
})

export const Footer = () =>
(<BottomPaper className='footer'>
    <Typography component="div" sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}>
        © 2023. Thi Nguyen
    </Typography>
</BottomPaper >)