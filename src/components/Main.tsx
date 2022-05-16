import { styled } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import Display from "./Display";

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open: boolean,
    drawerWidth: number,
}>(({ theme, open, drawerWidth }) => ({
    border: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
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

const IFrame = styled("iframe")(() => ({
    border: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden"
}));

export default ({ drawerWidth, open }: Props) => (
    <Main open={open} drawerWidth={drawerWidth}>
        <Routes>
            <Route path="/" element={<Display />} />
            <Route path="/dynamic-programming" element={<IFrame src="https://alchemist-al.com/edit-distance" />} />
        </Routes>
    </Main>
);
