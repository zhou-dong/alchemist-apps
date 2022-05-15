import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Divider, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import Side from './components/Side';
import Main from "./components/Main";

const drawerWidth = 105;

function App() {

  const [open, setOpen] = React.useState<boolean>(true);

  return (
    <Box sx={{ display: "flex" }} style={{ height: "100%" }}>
      <Side drawerWidth={drawerWidth} open={open} setOpen={setOpen} />
      <Main drawerWidth={drawerWidth} open={open} />
    </Box>
  );
}

export default App;
