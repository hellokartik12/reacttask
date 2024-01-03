import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className='link' style={{color:"white", textDecoration:"none"}} to="/">Home</Link>
          </Typography>
          <Button color="inherit"><Link style={{color:"white", textDecoration:"none"}} to="/login">Login</Link></Button>
          <Button color="inherit"><Link style={{color:"white", textDecoration:"none"}} to="/signup">Sign up</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
