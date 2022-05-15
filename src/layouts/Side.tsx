import { styled, useTheme } from '@mui/material/styles';
import { Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import React from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar, // necessary for content to be below app bar
    justifyContent: 'flex-end',
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
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        // width: 160,
                        // backgroundColor: " green"
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem>
                        Dynamic Programming
                    </ListItem>
                    <ListItem>
                        Sorting
                    </ListItem>
                </List>
            </Drawer>
            <div style={{
                width: "100%",
                // backgroundColor: "red"
            }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        onClick={handleDrawerOpen}
                        edge="start"
                    // sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6">
                        alchemist
                    </Typography>
                </Toolbar>
            </div>
        </>

    );

}
