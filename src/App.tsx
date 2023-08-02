import { createContext, useState } from 'react';
import { Box, CssBaseline, Toolbar, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { NavDrawer } from './components/Navigation';
import { TopBar } from './components/Bars';
import { ColorModeButton } from './components/ColorModeButton';

import { lightTheme, darkTheme } from './Theme';
import { PaletteMode } from '@mui/material';

const ThemeContext = createContext('light');

type PagePaths = { [key: string]: string; };
const pages: PagePaths = {
    'Coding': '/coding',
    'Blog': '/blog',
    'Resume': '/resume',
    'Contact': '/contact'
};
const navItems = Object.keys(pages);
const brand = 'THI';

export default function App() {
    const [themeColor, setThemeColor] = useState<PaletteMode>('light');
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = themeColor === 'light' ? lightTheme : darkTheme;
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const handleThemeColorToggle = () => {
        setThemeColor((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeContext.Provider value={themeColor}>
            <ThemeProvider theme={theme}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <TopBar className='top-bar' header={brand} handleDrawerToggle={handleDrawerToggle}
                        navItems={navItems} path={pages} >
                        <ColorModeButton mode={themeColor} toggleColorMode={handleThemeColorToggle}></ColorModeButton>
                    </TopBar>
                    <Box component="nav">
                        <NavDrawer className='nav-drawer'
                            header={brand} handleDrawerToggle={handleDrawerToggle}
                            navItems={navItems} path={pages} open={mobileOpen} width={240} />
                    </Box>
                    <Box component="main" sx={{ p: 3 }}>
                        <Toolbar />
                        <Typography>
                            <Outlet></Outlet>
                        </Typography>
                    </Box>

                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}
