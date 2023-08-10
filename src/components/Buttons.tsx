import { Brightness4, Brightness7, KeyboardArrowUp } from '@mui/icons-material';
import { IconButton, Fab } from '@mui/material';

interface BtnProps {
    mode: string,
    toggleColorMode: () => void,
}

export const ColorModeButton = (ps: BtnProps) => {
    return (
        <IconButton
            sx={{
                ml: 1, bgcolor: 'background.paper',
                color: 'text.primary'
            }}
            onClick={ps.toggleColorMode} color="inherit">
            {ps.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
    );
}

const FABStandard = {
    width: '35px', height: '35px',
    color: 'text.primary',
    bgcolor: 'transparent',
}

export const MoveUpFAB = () =>
(<Fab sx={{ ...FABStandard, position: 'fixed', bottom: '5%', right: '5%' }}> <KeyboardArrowUp />
</Fab >)