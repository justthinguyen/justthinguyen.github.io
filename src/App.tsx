import * as React from 'react';
import {
  AppBar, Box, Button, CssBaseline, IconButton, Toolbar, Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { ThemeProvider } from '@mui/material/styles';
import { Link, Outlet } from 'react-router-dom';
import { NavDrawer, PlainNavLink } from './components/Navigation';
import theme from './Theme';

type PagePaths = { [key: string]: string; };
const pages: PagePaths = {
  'Coding': '/coding',
  'Blog': '/blog',
  'Resume': '/resume',
  'Contact': '/contact'
};
const navItems = Object.keys(pages);
const brand = 'THI NGUYEN';

export default function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" color="primary">
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start"
              onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div"
              sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }}}
            >
              <PlainNavLink to="/">{brand}</PlainNavLink>
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Link to={pages[item]}>
                  <Button key={item} color='secondary'>
                    {item}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <NavDrawer 
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
