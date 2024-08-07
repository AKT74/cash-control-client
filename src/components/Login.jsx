import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const payload = {
        usernameEmail: username,
        password: password,
      };

      if (!username || !password) return alert("Please fill in all fields")

      const response = await axios.post('https://webservice-cash-control-server.vercel.app/login', payload);

      localStorage.setItem('token', response.data.token);
      navigate('/wallets');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username | Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={handleLogin}>Login</button>
      <h5>don't have an account ?<Link to="/signup"> sign up here</Link></h5>
    </div>
  );
};

export default Login;
