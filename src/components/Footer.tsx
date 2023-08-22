import { styled } from '@mui/system';
import { Paper, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { mediaLink, fullName } from '../contents/MyInfo';
import { MediaButton } from '../components/CustomizedMUI';


const BottomPaper = styled(Paper)({
    display: 'flex',
    textAlign: 'center',
    padding: '2% 10%',
})


export const Footer = () =>
(<BottomPaper className='footer'>
    <Typography component="div" sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}>
        <MediaButton href={mediaLink['Github']} title='Visit my Github'><GitHubIcon /></MediaButton>
        <MediaButton href={mediaLink['LinkedIn']} title='Visit my LinkedIn'><LinkedInIcon sx={{ fontSize: '1.8rem' }} /></MediaButton>
        <MediaButton href={mediaLink['EmailMe']} title='Send me an email'><EmailIcon sx={{ fontSize: '1.7rem' }} /></MediaButton>
        <br />
        © 2023. {fullName}
    </Typography>
</BottomPaper >)
