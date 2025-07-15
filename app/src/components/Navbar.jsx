import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../App';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        logout(); // Call actual logout from context
        Swal.fire('Logged out!', '', 'success');
      }
    });
  };

  return (
    <nav className="navbar navbar-expand bg-light shadow-sm py-3 px-3">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Left: Name */}
        <h1 className="fw-bold fs-5 m-0 text-dark">Hello!</h1>

        {/* Center: Quote */}
        <div className="mx-3 flex-grow-1 d-none d-sm-flex justify-content-center">
          <span className="bg-secondary bg-opacity-10 rounded px-3 py-1 text-center fw-small">
            "They always say time changes things, but you actually have to change them yourself."
          </span>
        </div>

        {/* Right: Weather + Auth Buttons */}
        <div className="d-flex align-items-center gap-2">
          <span className="text-warning small d-flex align-items-center gap-1 me-2">
            <b>🌞</b>25°C <span className="text-secondary d-none d-sm-inline">| Mostly Sunny</span>
          </span>
          {!isLoggedIn ? (
            <>
              <Button
                component={Link}
                to="/login"
                size="small"
                variant="outlined"
                color="primary"
                style={{
                  fontSize: '0.85rem',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  textTransform: 'none',
                  marginRight: '0.5rem',
                }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/signup"
                size="small"
                variant="contained"
                color="primary"
                style={{
                  fontSize: '0.85rem',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  textTransform: 'none',
                }}
              >
                SignUp
              </Button>
            </>
          ) : (
            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{
                fontSize: '0.85rem',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                textTransform: 'none',
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
