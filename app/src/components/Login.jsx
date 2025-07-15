import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  IconButton,
  useMediaQuery
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const validUser = { username: 'emilys', password: 'emilyspass' };

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsernameError('');
    setPasswordError('');
    setGeneralError('');

    // ✅ Leading space validation
    if (username.startsWith(' ') || password.startsWith(' ')) {
      if (username.startsWith(' ')) setUsernameError('Username cannot start with a space');
      if (password.startsWith(' ')) setPasswordError('Password cannot start with a space');
      return;
    }

    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && username === validUser.username && password === validUser.password) {
        login(data.token);
        navigate('/');
      } else {
        if (username !== validUser.username) {
          setUsernameError('Invalid username');
        } else {
          setPasswordError('Invalid password');
        }
        setUsername('');
        setPassword('');
      }
    } catch (err) {
      setGeneralError('Network error');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        width: isMobile ? '95vw' : 400,
        mx: 'auto',
        mt: isMobile ? 4 : 8,
        p: isMobile ? 2 : 4,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#fff',
        position: 'relative',
      }}
    >
      <IconButton
        aria-label="close"
        onClick={() => navigate('/')}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: 'grey.500',
          zIndex: 2,
        }}
      >
        <CloseIcon />
      </IconButton>

      <Typography
        variant="h5"
        mb={2}
        align="center"
        color="primary"
        fontWeight="bold"
      >
        Login
      </Typography>

      {generalError && <Alert severity="error" sx={{ mb: 2 }}>{generalError}</Alert>}

      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          type="text"
          fullWidth
          variant="filled"
          value={username}
          onChange={e => {
            const value = e.target.value;
            if (!value.startsWith(' ')) setUsername(value);
            setUsernameError('');
            setPasswordError('');
            setGeneralError('');
          }}
          required
          error={!!usernameError}
          helperText={usernameError}
          sx={{ mb: 2 }}
          inputProps={{ style: { textAlign: 'left' } }}
        />

        <TextField
          label="Password"
          variant="filled"
          fullWidth
          type="password"
          value={password}
          onChange={e => {
            const value = e.target.value;
            if (!value.startsWith(' ')) setPassword(value);
            setUsernameError('');
            setPasswordError('');
            setGeneralError('');
          }}
          required
          error={!!passwordError}
          helperText={passwordError}
          sx={{ mb: 2 }}
          inputProps={{ style: { textAlign: 'left' } }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            mt: 2,
            py: 1.5,
            fontWeight: 'bold',
            fontSize: '1rem',
            borderRadius: 3,
            transition: 'background 0.2s',
            '&:hover': { backgroundColor: '#1565c0' },
          }}
        >
          Login
        </Button>
      </form>

      <Typography variant="body2" mt={2} align="center">
        Use <b>emilys</b> / <b>emilyspass</b> for demo login.
      </Typography>
    </Box>
  );
};

export default Login;
