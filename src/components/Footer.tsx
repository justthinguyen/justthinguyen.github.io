import { styled } from '@mui/system';
import { Paper, Typography, IconButton, Link, LinkProps, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { mediaLink } from '../contents/MyInfo';


const BottomPaper = styled(Paper)({
    display: 'flex',
    'text-align': 'center',
    padding: '2% 10%',
})

const MediaButton = (ps: LinkProps) => (
    <Tooltip title={ps.title} placement="top">
        <IconButton sx={{
            padding: '5px 8px',
            ':hover': {
                padding: '5px 8px',
                'border-radius': '25%'
            }
        }}>
            <Link sx={{ color: 'inherit' }} target='_blank' href={ps.href} title={ps.title}>{ps.children}</Link>
        </IconButton >
    </Tooltip>
);

export const Footer = () =>
(<BottomPaper className='footer'>
    <Typography component="div" sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}>
        <MediaButton href={mediaLink['Github']} title='Visit my Github'><GitHubIcon /></MediaButton>
        <MediaButton href={mediaLink['LinkedIn']} title='Visit my LinkedIn'><LinkedInIcon sx={{ fontSize: '1.8rem' }} /></MediaButton>
        <MediaButton href={mediaLink['EmailMe']} title='Send me an email'><EmailIcon sx={{ fontSize: '1.7rem' }} /></MediaButton>
        <br />
        © 2023. Thi Nguyen
    </Typography>
</BottomPaper >)
