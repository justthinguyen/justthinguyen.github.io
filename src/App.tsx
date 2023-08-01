import * as React from 'react';
import { Box, CssBaseline, Toolbar, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { NavDrawer } from './components/Navigation';
import { TopBar } from './components/Bars';

import theme from './Theme';

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
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <TopBar className='top-bar' header={brand} handleDrawerToggle={handleDrawerToggle}
          navItems={navItems} path={pages} ></TopBar>
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
  );
}
