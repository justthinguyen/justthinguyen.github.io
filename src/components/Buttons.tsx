import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

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
            {ps.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    );
}