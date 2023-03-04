import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ height: '7rem' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{ cursor: 'pointer' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ fontFamily: 'tilt warp, cursive', fontSize: '1.25rem' }} >
            Escape Rooms
          </Typography>
          <Button color="inherit" style={{ cursor: 'pointer' }}>Sign Up</Button>
          <Button color="inherit" style={{ cursor: 'pointer' }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
