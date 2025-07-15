import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar, Box, Toolbar, IconButton, InputBase,
  Badge, Avatar, Menu, MenuItem, useMediaQuery
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { useTheme } from '@mui/material/styles';
import { useAuth } from '../App';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';


// Styled components for Search
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha('#000', 0.05),
  '&:hover': {
    backgroundColor: alpha('#000', 0.1),
  },
  marginLeft: theme.spacing(2),
  flexGrow: 1,
  maxWidth: 600,
  height: 34,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(0.8, 1, 0.8, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    fontSize: '0.875rem',
  },
}));

const Nav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { isLoggedIn, logout } = useAuth();

  // Notification dropdown state
  const [anchorNotif, setAnchorNotif] = useState(null);
  const openNotif = Boolean(anchorNotif);

  // User dropdown state
  const [anchorUser, setAnchorUser] = useState(null);
  const openUser = Boolean(anchorUser);

  // Notification handlers
  const handleNotifOpen = (event) => {
    setAnchorNotif(event.currentTarget);
  };
  const handleNotifClose = () => {
    setAnchorNotif(null);
  };

  // User dropdown handlers
  const handleUserOpen = (event) => {
    setAnchorUser(event.currentTarget);
  };
  const handleUserClose = () => {
    setAnchorUser(null);
  };

const handleLogout = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to logout?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, logout',
    cancelButtonText: 'Cancel',
  }).then((result) => {
    if (result.isConfirmed) {
      logout();  // from context
      setAnchorUser(null); // close menu
      Swal.fire('Logged Out', 'You have been successfully logged out.', 'success');
    }
  });
};


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'white',
          color: 'black',
          boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
          zIndex: 1300,
          height: isMobile ? 56 : 60,
          px: isMobile ? 1 : 2,
        }}
      >
        <Toolbar sx={{ minHeight: isMobile ? '48px !important' : '56px' }}>
          {/* Left: Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Emaar_India.svg/1200px-Emaar_India.svg.png"
              alt="EMAAR"
              style={{ height: isMobile ? 24 : 28 }}
            />
          </Box>

          {/* Center: Search */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: 'black', fontSize: 20 }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Box>
          )}

          {/* Right: Icons + Menus */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, ml: 'auto' }}>
            {isLoggedIn && (
              <>
                {/* Notification Icon */}
                <IconButton
                  size="medium"
                  sx={{ color: 'black' }}
                  onClick={handleNotifOpen}
                >
                  <Badge badgeContent={3} color="error">
                    <NotificationsOutlinedIcon sx={{ fontSize: 22 }} />
                  </Badge>
                </IconButton>

                {/* Notification Dropdown */}
                <Menu
                  anchorEl={anchorNotif}
                  open={openNotif}
                  onClose={handleNotifClose}
                  PaperProps={{ sx: { width: 300 } }}
                >
                  <MenuItem onClick={handleNotifClose}>🔔 Congratulations you got the job.</MenuItem>
                  <MenuItem onClick={handleNotifClose}>🔔 New task assigned to you.</MenuItem>
                  <MenuItem onClick={handleNotifClose}>🔔 HR posted a new update.</MenuItem>
                </Menu>

                {/* Avatar Icon */}
                <IconButton onClick={handleUserOpen}>
                  <Avatar
                    alt="User"
                    sx={{ width: 28, height: 28 }}
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                  />
                </IconButton>

                {/* User Menu */}
                <Menu
                  anchorEl={anchorUser}
                  open={openUser}
                  onClose={handleUserClose}
                >
                  <MenuItem onClick={handleUserClose}>👤 My Profile</MenuItem>
                  <MenuItem onClick={handleUserClose}>⚙️ Account</MenuItem>
                  <MenuItem onClick={handleLogout}>🚪 Logout</MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
