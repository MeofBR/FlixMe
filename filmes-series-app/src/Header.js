import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import './assets/styles/Header.css';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className='menu-container'>
      <div className='icon-container'>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2,}}
          onClick={handleMenu}
        >
          <MenuIcon 
          fontSize="large"/>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',            
          }}
          keepMounted
          transformOrigin={{
            // vertical: 'top',
            horizontal: 'right',            
          }}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: '20%',
              height: '100%',
              padding: '10px',                           
              borderRadius: '0.5rem',              
              justifyContent: 'center',
              textAlign: 'center',
              color: 'black',
              textDecoration: 'none'
            },
          }}
        >
          <div className='close-btn-container'>
            <CloseIcon
            onClick={handleClose}
            className="close-btn"
            />
          </div>
          
          <MenuItem className="MenuItem" onClick={handleClose}><Link to="/" style={{fontSize: '1.2rem', padding: '10px', color: 'black'}}>Home</Link></MenuItem>          
          <MenuItem className="MenuItem" onClick={handleClose}><Link to="/Seguindo" style={{fontSize: '1.2rem', padding: '10px', color: 'black'}}>Seguindo</Link></MenuItem>
          <MenuItem className="MenuItem" onClick={handleClose}><Link to="/" style={{fontSize: '1.2rem', padding: '10px', color: 'black'}}>Logout</Link></MenuItem>
        </Menu>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link Link to="/Feed"><img src='./assets/images/flix_logo.png' className='logo-img' alt="Logo" /></Link>
        </Typography>
      </div>
    </section>
  );
}