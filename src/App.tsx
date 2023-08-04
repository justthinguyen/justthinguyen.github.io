import { createContext, useState } from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { NavDrawer } from './components/Navigation';
import { TopBar } from './components/Bars';
import { Footer } from './components/Footer';
import { ColorModeButton } from './components/ColorModeButton';

import { lightTheme, darkTheme } from './Theme';
import { PaletteMode } from '@mui/material';
import { brand, navItems, pages } from './siteInfo';

const ThemeContext = createContext('light');

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
                    <Box component="main" sx={{ p: 3, flexGrow: 1, minHeight: '85vh' }}>
                        <Toolbar />
                        <Outlet></Outlet>
                    </Box>
                </Box>
                <Footer></Footer>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}
