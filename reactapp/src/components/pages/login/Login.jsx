import React, { useState } from 'react';
import './login.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import getAxiosInstance,{setAxiosInstanceWithToken} from '../../services/axiosInstance';

const LoginPage = ({handleLogin}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let axiosInstance = getAxiosInstance();
    axiosInstance.post("/admin/login", { userName, password })
      .then(result => {
        console.log(result.data.token)
        setAxiosInstanceWithToken(result.data.token);
        handleLogin();
        navigate("/");
      })
      .catch(err => {
        alert(err.message);
        console.log("Error during login:", err);
      });
  };


  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">User Name</label>
          <input
            type='text'
            id="userName"
            name="username"
            placeholder="Enter your username"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter the password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button type="submit">Login</button>
        <p>Don't have an account? <NavLink to="/login/createAccount" className="create-account">Create Account</NavLink></p>
      </form>
      <Outlet />
    </div>
  );
};

export default LoginPage;
