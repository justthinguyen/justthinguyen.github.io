import { styled } from '@mui/material/styles';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { Stack, Typography, TypographyProps, IconButton, Link, LinkProps, Tooltip } from '@mui/material';

export const TextTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'transparent',
        color: 'inherit',
        boxShadow: 'none',
        fontSize: 12,
        paddingTop: 0,
    },
}));

export const TextStack = styled(Stack)({
    pt: 0.5, flexWrap: 'wrap', gap: '3px'
})

export const Title = styled(Typography)({
    fontWeight: 600,
    fontSize: '1.25rem',
    lineHeight: 1.6,
})

export const SubtitleSX = {
    margin: '6px',
    fontWeight: 800,
    fontSize: '1rem'
}
export const CaptionSX = {
    fontWeight: 400,
    fontSize: '0.9rem',
    lineHeight: 1.66
}
export const Subtitle = (ps: TypographyProps) => <Typography component='span' sx={SubtitleSX}>{ps.children}</Typography>
export const Caption = (ps: TypographyProps) => <Typography component='span' sx={CaptionSX}>{ps.children}</Typography>

export const MediaButton = (ps: LinkProps) => (
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