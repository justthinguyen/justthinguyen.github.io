import {
    Box, Divider, Drawer, DrawerProps, Link as MUILink, LinkProps,
    List, ListItem, ListItemButton, ListItemText, Typography
} from '@mui/material';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const RouterLink: React.FC<LinkProps<typeof NavLink>> = (ps) =>
    <MUILink component={NavLink} {...ps}>{ps.children}</MUILink>;

export const PlainNavLink = styled(RouterLink)({
    textDecoration: 'none',
    ':hover': { 'textDecoration': 'none' },
});

interface IDrawerProps extends DrawerProps {
    header?: string;
    headerPath?: string;
    open?: boolean;
    handleDrawerToggle: () => void;
    navItems: string[];
    path: { [key: string]: string; };
    width?: number;

}
export const NavDrawer = (ps: IDrawerProps) => (
    <Drawer className={ps.className}
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
                <><Typography variant="h5" sx={{ my: 2 }}>
                    <PlainNavLink to={ps.headerPath ?? ''}>{ps.header}</PlainNavLink>
                </Typography>
                    <Divider /></>
                : <></>}

            <List>
                {ps.navItems.map((item) => (
                    <ListItem key={item} disablePadding component={NavLink} to={ps.path[item]} sx={{ color: 'inherit' }}>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    </Drawer>
);
