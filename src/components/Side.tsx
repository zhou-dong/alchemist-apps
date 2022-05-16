import React from "react";
import { Link as RouterLink } from "react-router-dom";
import MaterialLink from "@mui/material/Link";
import { styled } from '@mui/material/styles';
import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { ChevronLeft, Menu } from '@mui/icons-material';

const bottom = 0;

const ChevronPosition = styled("div")<{
    drawerWidth: number
}>(({ drawerWidth }) => ({
    width: drawerWidth,
    position: "fixed",
    bottom,
}));

const ChevronHolder = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const CloseDrawer: React.FC<{
    drawerWidth: number,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ drawerWidth, setOpen }) => (
    <ChevronPosition drawerWidth={drawerWidth}>
        <Divider />
        <ChevronHolder>
            <IconButton onClick={() => setOpen(false)}>
                <ChevronLeft color="primary" />
            </IconButton>
        </ChevronHolder>
    </ChevronPosition>
);

const OpenDrawer: React.FC<{
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ open, setOpen }) => (
    <Toolbar sx={{ position: "fixed", bottom }}>
        <IconButton
            sx={{ ...(open && { display: 'none' }) }}
            onClick={() => setOpen(true)}
        >
            <Menu color="primary" />
        </IconButton>
    </Toolbar>
);

const Title = () => (
    <Toolbar>
        <Typography variant="h6" color="secondary" align="center" style={{ width: "100%", fontWeight: "normal" }}>
            <MaterialLink
                component={RouterLink}
                to="/"
                style={{ textDecoration: 'none' }}
            >
                Alchemist
            </MaterialLink>
        </Typography>
    </Toolbar>
);

const Item: React.FC<{ name: string, path: string }> = ({ name, path }) => (
    <ListItem disablePadding>
        <ListItemButton>
            <MaterialLink
                component={RouterLink}
                to={path}
                style={{ textDecoration: 'none', textAlign: 'left', width: "100%" }}
                color="secondary"
            >
                <ListItemText primary={name} />
            </MaterialLink>
        </ListItemButton>
    </ListItem>
);

const Items = () => (
    <List sx={{ padding: 0 }}>
        <Item name="Dynamic Programming" path="dynamic-programming" />
        <Item name="Sorting" path="sorting" />
        <Item name="Tree" path="tree" />
    </List>
);

interface Props {
    drawerWidth: number;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Side = ({ drawerWidth, open, setOpen }: Props) => (
    <>
        <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                },
            }}
        >
            <Title />
            <Divider />
            <Items />
            <CloseDrawer drawerWidth={drawerWidth} setOpen={setOpen} />
        </Drawer>
        <OpenDrawer open={open} setOpen={setOpen} />
    </>
);

export default Side;
