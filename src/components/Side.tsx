import React from "react";
import { Link as RouterLink } from "react-router-dom";
import MaterialLink from "@mui/material/Link";
import { styled } from '@mui/material/styles';
import { Avatar, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
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
        <Divider style={{ borderBottom: "1px solid white" }} />
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
            <Menu color="secondary" />
        </IconButton>
    </Toolbar>
);

const Title = () => (
    <Toolbar style={{ padding: 0 }}>
        <Typography variant="h6" align="center" style={{ width: "100%", fontWeight: "normal" }}>
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

const Item: React.FC<{ name: string, path: string, shortName: string }> = ({ name, path, shortName }) => (
    <ListItem disablePadding>
        <ListItemButton style={{ paddingLeft: 0, paddingRight: 0 }}>
            <MaterialLink
                component={RouterLink}
                to={path}
                style={{
                    textDecoration: 'none',
                    textAlign: 'center',
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    alignItems: "center",
                }}
            >
                <Avatar color="secondary" sx={{
                    background: "none",
                    color: "color",
                    border: "1px solid white",
                    width: 22,
                    height: 22,
                    fontSize: 12,
                }}>
                    {shortName}
                </Avatar>
                <ListItemText primary={name} />
            </MaterialLink>
        </ListItemButton>
    </ListItem>
);

const Items = () => (
    <List sx={{ padding: 0 }}>
        <Item name="Dynamic Programming" path="dynamic-programming" shortName="DP" />
        <Item name="Sorting" path="sorting" shortName="S" />
        <Item name="Tree" path="tree" shortName="T" />
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
            <Divider style={{ borderBottom: "1px solid white", marginBottom: 10 }} />
            <Items />
            <CloseDrawer drawerWidth={drawerWidth} setOpen={setOpen} />
        </Drawer>
        <OpenDrawer open={open} setOpen={setOpen} />
    </>
);

export default Side;
