import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './assets/styles/Login.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  function handleLogin(event) {
    event.preventDefault();
    
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {      
      navigate('/Feed');
    } else {      
      alert('Usuário ou senha incorretos!');
    }
  }
  return (
    <section className='login-container'>
      <img src='./assets/images/flix_logo.png' className='main-logo' alt="Logo" />
      <div className='modal-container'>
        <h1 className='title'>Login</h1>
        <form onSubmit={handleLogin} className='form-container'>
          <input
            required 
            className='input-default'
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            required 
            className='input-default'
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className='login-button' type="submit">Login</button>
        </form>
        <p>Não possui uma conta? <Link to="./Cadastro">Criar Agora!</Link></p>
      </div>
    </section>

    
  );
};

localStorage.setItem('username', 'admin');
localStorage.setItem('password', 'admin');

export default Login;