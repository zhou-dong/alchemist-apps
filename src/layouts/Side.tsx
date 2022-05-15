import { styled, useTheme } from '@mui/material/styles';
import { Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, Toolbar, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import React from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import { green, grey } from '@mui/material/colors';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar, // necessary for content to be below app bar
    justifyContent: 'flex-end',
    position: "fixed",
    bottom: 10
}));

const drawerWidth = 100;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

export default () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState<boolean>(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        backgroundColor: green[400],
                        color: "white",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <Typography>
                    Alchemist
                </Typography>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon style={{ color: "white" }} />
                    </IconButton>
                </DrawerHeader>
                <Divider style={{ border: "0.1px solid white" }} />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Typography variant="body2" align='center' style={{ width: "100%" }}>
                                Dynamic Programming
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Typography variant="body2" align='center' style={{ width: "100%" }}>
                                Sorting
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Typography variant="body2" align='center' style={{ width: "100%" }}>
                                Tree
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Main style={{ background: "yellow" }} open={open}>
                hello world
            </Main>
            <Toolbar sx={{ position: "fixed", bottom: "10px" }}>
                <IconButton
                    color="inherit"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </>

    );

}
