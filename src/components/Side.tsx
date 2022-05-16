import React from "react";
import { Link as RouterLink } from "react-router-dom";
import MaterialLink from "@mui/material/Link";
import { styled, useTheme } from '@mui/material/styles';
import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, Toolbar, Typography } from "@mui/material";
import { ChevronLeft, Menu } from '@mui/icons-material';

const bottom = 5;

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
    ...theme.mixins.toolbar, // necessary for content to be below app bar
    justifyContent: 'flex-end',
}));

const CloseDrawer: React.FC<{
    drawerWidth: number,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ drawerWidth, setOpen }) => (
    <ChevronPosition drawerWidth={drawerWidth}>
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

interface Props {
    drawerWidth: number;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Logo = () => (
    <Toolbar style={{ overflow: "hidden", padding: 0 }}>
        <Typography variant="h6" align="center" style={{ marginTop: 6, marginBottom: 6, width: "100%" }} color="primary">
            alchemist
        </Typography>
    </Toolbar>
);

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
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <Logo />

                <Divider />
                <List sx={{ padding: 0 }}>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ paddingLeft: 0, paddingRight: 0 }}>
                            <MaterialLink
                                component={RouterLink}
                                to={"/home"}
                                style={{ textDecoration: 'none', width: "100%", textAlign: 'center' }}
                                color="secondary"
                            >
                                Dynamic Programming
                            </MaterialLink>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Typography variant="body2" align='center' sx={{ width: "100%" }}
                                color="secondary"
                            >
                                Sorting
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Typography variant="body2" align='center' sx={{ width: "100%" }}
                                color="secondary">
                                Tree
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                </List>

                <CloseDrawer drawerWidth={drawerWidth} setOpen={setOpen} />
            </Drawer>

            <OpenDrawer open={open} setOpen={setOpen} />
        </>

    );

}
