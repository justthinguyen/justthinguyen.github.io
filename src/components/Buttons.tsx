import { Brightness4, Brightness7, KeyboardArrowUp } from '@mui/icons-material';
import { IconButton, Fab } from '@mui/material';
import { AppBarButtonSX } from '../Theme';

interface BtnProps {
    mode: string,
    toggleColorMode: () => void,
}

export const ColorModeButton = (ps: BtnProps) => {
    return (
        <IconButton
            sx={{ ml: 1, ...AppBarButtonSX }}
            onClick={ps.toggleColorMode}>
            {ps.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
    );
}

const FABStandard = {
    width: '35px', height: '35px',
    color: 'text.primary',
    bgcolor: 'transparent',
}

const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) };

export const MoveUpFAB = () => (
    <Fab sx={{ ...FABStandard, position: 'fixed', bottom: '5%', right: '5%' }} onClick={scrollToTop}>
        <KeyboardArrowUp />
    </Fab >
)