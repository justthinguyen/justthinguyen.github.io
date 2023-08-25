import { createTheme, ThemeOptions } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

const themeOptions = (mode: PaletteMode): ThemeOptions =>
({
    palette: {
        mode: mode,
        ...(mode === 'light' ? {
            primary: {
                main: '#B73A65',
                contrastText: '#fbf4f7',
            },
            secondary: {
                main: '#b73a6547', //'#c56183',
                contrastText: '#1d2547',
            },
            text: {
                primary: '#1d2547', //'#ffcdd2',
                // secondary: '#ffebec'
            },
            background: {
                default: '#fff',
                paper: '#fbf4f7' //'#ffebec',
            }
        } : {
            primary: {
                main: '#B73A65',
                contrastText: '#fbf4f7',
            },
            secondary: {
                main: '#f1dfe5',  //'#b73a6566',//'#b73a6514',
                contrastText: '#1d2547',
            },
            text: {
                primary: '#fbf4f7' //'#ffcdd2', '#ffebee',
            },
            background: {
                default: '#181717',
                paper: '#161414',
            },
        }),
    },
    typography: {
        fontFamily: 'Helvetica, Arial, sans-serif'
    }
});


export const lightTheme = createTheme(themeOptions('light'));
export const darkTheme = createTheme(themeOptions('dark'));

export const AppBarSX = {
    backgroundColor: 'background.paper',
    boxShadow: 'none',
    color: 'primary'
};

export const AppBarButtonSX = {
    bgcolor: 'secondary.main',
    color: 'secondary.contrastText'
}