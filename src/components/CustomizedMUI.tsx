import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { Stack, Typography } from '@mui/material';

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

export const Subtitle = styled(Typography)({
    margin: '6px',
    fontWeight: 800,
    fontSize: '1rem'
})

export const Caption = styled(Typography)({
    fontWeight: 400,
    fontSize: '0.9rem',
    lineHeight: 1.66
})