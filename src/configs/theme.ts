import { green, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: green[500],
            contrastText: "white"
        },
        secondary: {
            main: grey[600],
            contrastText: "white"
        }
    },
});

export default theme;
