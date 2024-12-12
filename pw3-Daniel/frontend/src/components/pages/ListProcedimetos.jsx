import React, { useState, useEffect } from 'react';
import style from './ListProcedimento.module.css';
import Container from '../layout/Container';
import ContainerProcedimento from '../layout/ContainerProcedimentos';
import logo from '../../../public/logo.png';
import CardProcedimento from './CardProcedimento';

const ListProcedimento = () => {
    // State para armazenar os dados
    const [procedimento, setProcedimento] = useState([]);

    // Chamada à API usando useEffect
    useEffect(()=>{

        fetch('http://localhost:3000/procedimentos', {
            method: 'GET',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        })
            .then((resp)=>resp.json())
            .then((data) => {
                console.log('Response completa:', data);
                setProcedimento(data.data || data);
                console.log('STATE: ' + procedimento);
            })
            .catch((err)=>{console.log(err)});

    }, []);
    return (
        <Container>
            <section className={style.listDoce_container}>
                <h1>PROCEDIMENTOS</h1>
                <ContainerProcedimento>
                    {procedimento.map((procedimento) => (
                        <CardProcedimento
                            id_procedimento={procedimento.id_procedimento}
                            procedimento={procedimento.procedimento}
                            valor={procedimento.valor}
                            imagem={logo}
                            key={procedimento.id_procedimento}
                        />
                    ))}
                </ContainerProcedimento>
            </section>
        </Container>
    );
};

export default ListProcedimento;
