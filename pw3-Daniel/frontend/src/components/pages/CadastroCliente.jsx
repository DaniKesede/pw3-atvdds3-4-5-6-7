import React, { useState } from 'react';
import style from "./CreateTime.module.css";
import NavBar from "../layout/NavBar";
import axios from "axios";

const CadastroCliente = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:3000/clientes', { // Altere para o endpoint correto
          nome,
          email,
          senha,
        });
        console.log('Resposta do servidor:', response.data); // Log para ver a resposta
        setMensagem(`Produto criado com sucesso: ${response.data.nome}`);
      } catch (error) {
        console.error('Erro:', error); // Log para ver o erro
        setMensagem(`Erro ao criar produto: ${error.response?.data?.mensagem || error.message || 'Erro desconhecido'}`);
      }
    };

    return (
    <div>
        
    
        <form onSubmit={handleSubmit}>
    
        <h1> Cadastre-se</h1>
            
            <input
            placeholder= 'Digite seu nome'
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            />

            
            <input
            placeholder= 'Digite seu email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        
            
            <input
            placeholder= 'Digite sua senha'
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            />
        
        <button className={style.subutton}type="submit">Cadastrar</button>
        </form>
        {mensagem && <p>{mensagem}</p>}
    </div>
    );
};

export default CadastroCliente;