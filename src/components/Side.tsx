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
}));

interface Props {
    drawerWidth: number;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default ({ drawerWidth, open, setOpen }: Props) => {

    const theme = useTheme();

    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        backgroundColor: green[700],
                        color: "white",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <Typography variant="h6" align="center" style={{ marginTop: 6, marginBottom: 6 }}>
                    Alchemist
                </Typography>

                <div style={{
                    width: drawerWidth,
                    position: "fixed",
                    bottom: 10,
                }}>
                    <DrawerHeader>
                        <IconButton onClick={() => setOpen(false)}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </DrawerHeader>
                </div>

                <Divider />
                <List sx={{ padding: 0 }}>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Typography variant="body2" align='center' sx={{ width: "100%" }}>
                                Dynamic Programming
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Typography variant="body2" align='center' sx={{ width: "100%" }}>
                                Sorting
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Typography variant="body2" align='center' sx={{ width: "100%" }}>
                                Tree
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>

            <Toolbar sx={{ position: "fixed", bottom: "10px" }}>
                <IconButton
                    color="inherit"
                    onClick={() => setOpen(true)}
                    edge="start"
                    sx={{ ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </>

    );

}
