import { styled } from '@mui/material/styles';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open: boolean;
    drawerWidth: number;
}>(({ theme, open, drawerWidth }) => ({
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

interface Props {
    drawerWidth: number;
    open: boolean;
}

export default ({ drawerWidth, open }: Props) => {
    return (
        <Main open={open} drawerWidth={drawerWidth}>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Main>
    );
}
