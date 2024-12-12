
import React, { useState } from 'react';
import style from "./CreateProcedimento.module.css"
import axios from 'axios';


const CadastroProcedimento = () => {
    const [procedimento, setProcedimento] = useState('');
    const [valor, setValor] = useState('');
    const [mensagem, setMensagem] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault(); 
  
      try {
        const response = await axios.post('http://localhost:3000/procedimentos', { // Altere para o endpoint correto
          procedimento,
          valor
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
      
        <form className={style.container} onSubmit={handleSubmit}>
      
        <h1 className={style.texto}> Cadastre o procedimento </h1>
            
            <input 
              placeholder= 'Digite o nome do procedimento '
              type="text"
              value={procedimento}
              onChange={(e) => setProcedimento(e.target.value)}
              required
            />
          
            <input
              placeholder= 'Digite o valor'
              type="number"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              required
            />
          
          <button className={style.button_cad} type="submit">Cadastrar</button>
        </form>
        {mensagem && <p className={style.criar}>{mensagem}</p>}
      </div>
      
    );
    
  };
  
  export default CadastroProcedimento;
  