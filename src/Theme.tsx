import { createTheme, ThemeOptions } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

const themeOptions = (mode: PaletteMode): ThemeOptions =>
({
    palette: {
        mode: mode,
        primary: {
            main: '#B73A65',
            contrastText: '#fbf4f7',
        },
        secondary: {
            main: '#F8E4E7',
            contrastText: '#1d2547',
        },
        ...(mode === 'dark' ? {
            text: {
                primary: '#fbf4f7' //'#ffcdd2', '#ffebee',
            }
        } : {
            text: {
                primary: '#1d2547', //'#ffcdd2',
                // secondary: '#ffebec'
            }
        }),
        ...(mode === 'light' && {
            background: {
                default: '#fff',
                paper: '#fbf4f7' //'#ffebec',
            }
        }),

    },
    typography: {
        fontFamily: 'Montserrat, Droid Sans, Roboto'//'"DomaineText",Georgia,serif',
    }
});


export const lightTheme = createTheme(themeOptions('light'));
export const darkTheme = createTheme(themeOptions('dark'));

export const AppBarSX = {
    backgroundColor: 'background.paper',
    boxShadow: 'none',
    color: 'primary'
};