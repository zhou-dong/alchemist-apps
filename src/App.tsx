import React from 'react';
import Box from '@mui/material/Box';
import Side from './components/Side';
import Main from "./components/Main";

const drawerWidth = 105;

function App() {

  const [open, setOpen] = React.useState<boolean>(true);

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Side drawerWidth={drawerWidth} open={open} setOpen={setOpen} />
      <Main drawerWidth={drawerWidth} open={open} />
    </Box>
  );
}

export default App;
