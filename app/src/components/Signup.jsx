import React, { useState } from 'react'
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  IconButton,
  useMediaQuery,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [usernameError, setUsernameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const navigate = useNavigate()
  const isMobile = useMediaQuery('(max-width:600px)')

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowAlert(false)
    setUsernameError('')
    setEmailError('')
    setPasswordError('')

    // Leading space validation
    let hasError = false
    if (username.startsWith(' ')) {
      setUsernameError('Username cannot start with a space')
      hasError = true
    }
    if (email.startsWith(' ')) {
      setEmailError('Email cannot start with a space')
      hasError = true
    }
    if (password.startsWith(' ')) {
      setPasswordError('Password cannot start with a space')
      hasError = true
    }

    if (hasError) return

    // Show temporary alert
    setShowAlert(true)
    setUsername('')
    setEmail('')
    setPassword('')
    setTimeout(() => setShowAlert(false), 3000)
  }

  return (
    <Box className="flex items-center justify-center">
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
          mb={1}
          align="center"
          color="primary"
          fontWeight="bold"
        >
          Sign Up
        </Typography>

        {showAlert && (
          <Alert severity="info" sx={{ mb: 2 }}>
            This feature will be soon available!
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="filled"
            fullWidth
            value={username}
            onChange={(e) => {
              const value = e.target.value
              if (!value.startsWith(' ')) setUsername(value)
              setUsernameError('')
              setEmailError('')
              setPasswordError('')
            }}
            error={!!usernameError}
            helperText={usernameError}
            sx={{ mb: 2 }}
            inputProps={{ style: { textAlign: 'left' } }}
          />

          <TextField
            label="Email"
            variant="filled"
            fullWidth
            value={email}
            onChange={(e) => {
              const value = e.target.value
              if (!value.startsWith(' ')) setEmail(value)
              setUsernameError('')
              setEmailError('')
              setPasswordError('')
            }}
            error={!!emailError}
            helperText={emailError}
            sx={{ mb: 2 }}
            inputProps={{ style: { textAlign: 'left' } }}
          />

          <TextField
            label="Password"
            type="password"
            variant="filled"
            fullWidth
            value={password}
            onChange={(e) => {
              const value = e.target.value
              if (!value.startsWith(' ')) setPassword(value)
              setUsernameError('')
              setEmailError('')
              setPasswordError('')
            }}
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
              mt: 1,
              py: 1.5,
              fontWeight: 'bold',
              fontSize: '1rem',
              borderRadius: 3,
              transition: 'background 0.2s',
              '&:hover': { backgroundColor: '#1565c0' },
            }}
          >
            Sign Up
          </Button>
        </form>

        <Typography variant="body2" mt={2} align="center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default Signup
