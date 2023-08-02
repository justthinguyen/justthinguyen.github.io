import { AppBar, AppBarProps, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { PlainNavLink } from './Navigation';

interface BarProps extends AppBarProps {
    header?: string;
    headerPath?: string;
    handleDrawerToggle: () => void;
    navItems: string[];
    path: { [key: string]: string; };
    width?: number;
}

export const TopBar = (ps: BarProps) => {
    const { header, headerPath, handleDrawerToggle, navItems, path } = ps;
    return (
        <AppBar component="nav" color="primary" className={ps.className}>
            <Toolbar>
                <IconButton color="inherit" aria-label="open drawer" edge="start"
                    onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h5" component="div"
                    sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                >
                    <PlainNavLink to={headerPath ?? '/'}>{header}</PlainNavLink>
                </Typography>

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                        <Button key={item} color='secondary'>
                            <PlainNavLink to={path[item]}> {item} </PlainNavLink>
                        </Button>
                    ))}
                </Box>
                {ps.children}
            </Toolbar>
        </AppBar>
    )
}