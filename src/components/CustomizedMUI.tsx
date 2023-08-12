import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { Stack } from '@mui/material';

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