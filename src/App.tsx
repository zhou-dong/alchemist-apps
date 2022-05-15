import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Divider, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // ...theme.mixins.toolbar, // necessary for content to be below app bar
  justifyContent: 'flex-end',
}));

function App() {
  const [open, setOpen] = React.useState<boolean>(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }} style={{ height: "100%" }}>
      <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            // width: 160,
            // backgroundColor: " green"
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem>
            Dynamic Programming
          </ListItem>
          <ListItem>
            Sorting
          </ListItem>
        </List>
      </Drawer>


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
    </Box>
  );
}

export default App;
