import { Typography } from "@mui/material"
import { styled } from '@mui/material/styles';

const Center = styled("div")(() => ({
    border: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export default () => (
    <Center>
        <Typography
            align="center"
            variant="h1"
            sx={{ marginTop: "-200px" }}
            color="primary"
        >
            Alchemist
        </Typography>
    </Center>
);
