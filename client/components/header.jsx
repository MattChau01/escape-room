import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import esc from '../../server/public/escape.png';

const drawerWidth = 240;

function Header(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Divider />
      <List>
        <div
          className='text-center my-5'
          style={{
            overflow: 'hidden'
          }}>

          <div className='row my-2'>
            <div className='col-2'>
              <i className="fa-solid fa-house mx-2 mt-2" style={{ fontSize: '1rem' }} />
            </div>
            <div className='col'>
              <a className='mx-2' style={{ cursor: 'pointer', fontSize: '1.5rem' }} onClick={props.toHome} >Home</a>
            </div>
          </div>

          <div className='row my-2'>
            <div className='col-2'>
              <i className="fa-solid fa-shop mx-2 mt-2" style={{ fontSize: '1rem' }} />
            </div>
            <div className='col'>
              <a className='mx-2' style={{ cursor: 'pointer', fontSize: '1.5rem' }} onClick={props.routeVSignin} >Vendors</a>
            </div>
          </div>
          <div className='row my-2'>
            <div className='col-2'>
              <i className="fa-solid fa-user mx-2 mt-2" style={{ fontSize: '1rem' }} />
            </div>
            <div className='col'>
              <a className='mx-2' style={{ cursor: 'pointer', fontSize: '1.5rem' }} onClick={props.participants} >Participants</a>
            </div>
          </div>
          <div className='row my-2'>
            <div className='col-2'>
              <i className="fa-solid fa-circle-info mx-2 mt-2" style={{ fontSize: '1rem' }} />
            </div>
            <div className='col'>
              <a className='mx-2' style={{ cursor: 'pointer', fontSize: '1.5rem' }} onClick={props.aboutUs} >About Us</a>
            </div>
          </div>
        </div>
      </List>
      <Divider />
      <List>
        <div className='d-flex justify-content-center align-items-center'>
          <div style={{
            position: 'fixed',
            bottom: 0
          }}>
            <div className='text-center'>
              <a className='github' href='https://github.com/MattChau01/escape-room' target='_blank' rel="noreferrer">
                <i className="fa-brands fa-github" style={{ fontSize: '1.5rem', cursor: 'pointer', color: '#000' }} />
              </a>
            </div>
            <p>Howdy inspectors!</p>
          </div>
        </div>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className='drawer' style={{ backgroundColor: '#046290' }}>
        {/* <div style={{ backgroundColor: '#046290' }}> */}
        <div className='mx-2 my-2' style={{ backgroundColor: '#046290' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            style={{
              outline: 'none'
            }} >
            <MenuIcon />
          </IconButton>

          <a style={{
            fontSize: '1.6rem',
            fontWeight: 500
          }}>
            <span>
              <img src={esc} alt='esc' style={{ width: '1.75rem', height: '1.75rem', marginBottom: '.25rem', marginLeft: '.5rem' }} />
            </span> Room Finder
          </a>

        </div>
      </AppBar>
      {/* </div> */}
      <Box
        component="nav"
        aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Header;
