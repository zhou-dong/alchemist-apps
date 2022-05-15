import { styled, useTheme } from '@mui/material/styles';
import { Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import React from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';

export default () => {
    const [open, setOpen] = React.useState<boolean>(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
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
    );
}
