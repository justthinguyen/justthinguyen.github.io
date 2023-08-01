import { Box, Divider, Drawer, Link as MUILink, LinkProps, 
    List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const NavLink: React.FC<LinkProps<typeof Link>> = (ps) => <MUILink component={Link} {...ps}> {ps.children} </MUILink>;

export const PlainNavLink = styled(NavLink)({
    color:'inherit', 
    'text-decoration':'none',
    ':hover': { 'text-decoration':'none', 'font-size': 'larger'}
});
  
interface DrawerProps {
    header?: string;
    headerPath?: string;
    open?: boolean;
	handleDrawerToggle: () => void;
    navItems: string[];
    path: { [key: string]: string; };
    width?: number;

}
export const NavDrawer = (ps: DrawerProps) => (
    <Drawer
        variant="temporary"
        open={ps.open || false}
        onClose={ps.handleDrawerToggle}
        ModalProps={{
            keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: ps.width ?? 240 },
        }}>
        <Box onClick={ps.handleDrawerToggle} sx={{ textAlign: 'center' }}>
            {ps.header ? 
            <><Typography variant="h6" sx={{ my: 2 }}>
                <PlainNavLink to={ps.headerPath ?? ''}>{ps.header}</PlainNavLink>
            </Typography>
            <Divider /></> 
            : <></> }
            
            <List>
                {ps.navItems.map((item) => (
                <ListItem key={item} disablePadding component={Link} to={ps.path[item]} sx={{color:'inherit'}}>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={item} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Box>
    </Drawer>
);