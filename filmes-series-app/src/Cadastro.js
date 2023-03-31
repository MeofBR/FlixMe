import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './assets/styles/Login.css';

const Cadastro = () => {
  const [showModal, setShowModal] = useState(false);

  const abrirModal = () => {    
    setShowModal(true); 
  }

  const salvarDados = (event) => {
    event.preventDefault();
  
    const nome = document.getElementById('name').value;
    const endereco = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const usuario = document.getElementById('user').value;
    const senha = document.getElementById('pass').value;
    const senhaConfirma = document.getElementById('pass-confirm').value;
  
    if (senha === senhaConfirma) {
      const usuarioNovo = {
        nome: nome,
        endereco: endereco,
        email: email,
        usuario: usuario,
        senha: senha,
      };
      
      localStorage.setItem('usuario', JSON.stringify(usuarioNovo));
      localStorage.setItem('username', usuario);
      localStorage.setItem('password', senha);    
      abrirModal();
    }else {
      alert("As senhas não conferem!")     
    }      
  }; 
  return (
    <section className='login-container'>      
        {showModal && ( 
          <div className='modal-overlay'>
          <div className='modal-container'>
            <h1>Conta criada com sucesso!</h1>
            <Link to="/Feed">
              <button className='login-button'>Entrar</button>
            </Link>
          </div>
        </div>
        )}
        <div className='modal-container'>
          <h1 className='title'>Cadastro</h1>
          <form onSubmit={salvarDados} className='form-container'>      
            <input required className='input-default' type="text" placeholder="Nome Completo" id='name'/>
            <input required className='input-default' type="text" placeholder="Endereço" id='address'/>
            <input required className='input-default' type="email" placeholder="E-mail" id='email'/>        
            <input required className='input-default  spacer-top' type="text" placeholder="Usuário" id='user'/>
            <div className='side-by-side-container'>
              <input required className='input-default' type="password" placeholder="Senha" id='pass'/>
              <input required className='input-default' type="password" placeholder="Confirme a Senha" id='pass-confirm'/>
            </div>
            <button className='login-button' type="submit">Criar Conta!</button>
          </form>
          <p>Caso tenha uma conta, <Link to="/">Login!</Link></p>
        </div>      
    </section>
  );
};

export default Cadastro;