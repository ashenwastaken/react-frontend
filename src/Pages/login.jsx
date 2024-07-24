import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Redux/Slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '../Auth/auth'; // Import setAuthToken directly

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const user = useSelector((state) => state.user.user);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    if (status === 'success' && user) {
      setAuthToken(user.token); 
      navigate('/profile');
    }
  }, [status, user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={credentials.email}
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        placeholder="Email"
      />
      <input
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        placeholder="Password"
      />
      <button type="submit">Login</button>
      <button type="button" onClick={() => navigate('/signup')}>
        Don't have an account? Sign Up
      </button>
      {status === 'failed' && <p>Error: {error}</p>}
    </form>
  );
};

export default Login;
