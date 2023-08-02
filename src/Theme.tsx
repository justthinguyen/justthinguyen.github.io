import { createTheme, ThemeOptions } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

const themeOptions = (mode: PaletteMode): ThemeOptions =>
({
    palette: {
        mode: mode,
        primary: {
            main: '#9a2351',
            contrastText: '#ffebec',
        },
        secondary: {
            main: '#ffebec',
            contrastText: '#1d2547',
        },
        ...(mode === 'dark' && {
            text: {
                primary: '#ffebee', //'#ffcdd2',
            }
        }),
        ...(mode === 'light' && {
            background: {
                default: '#ffebee',
                paper: '#fff',
            }
        }),

    },
    typography: {
        fontFamily: 'Montserrat, Droid Sans, Roboto'//'"DomaineText",Georgia,serif',
    }
});


export const lightTheme = createTheme(themeOptions('light'));
export const darkTheme = createTheme(themeOptions('dark'));