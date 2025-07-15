import './App.css';
import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';

import Home from './page/Home.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import Nav from './components/Nav.jsx';
import Err from './page/Err.jsx';
// 🔐 Auth context setup
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('token'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 💠 Shared layout based on route
function Layout({ children }) {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  if (isAuthPage) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80") center/cover no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ width: '100%', maxWidth: 500 }}>{children}</div>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <div className="appdiv"></div>
      <div className="main-content">
       <Sidebar />
        {children}
      </div>
    </div>
  );
}

// 🚀 App root
function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="*" element={<Navigate to="/Err" />} />
            <Route path="/Err" element={<Err/>}/>
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;