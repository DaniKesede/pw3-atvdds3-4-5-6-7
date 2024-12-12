import React from "react";
import style from "./CreateTime.module.css";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";
import axios from "axios";


const CreateTime = () => {
    return(
        <section className={style.create_time_container}>
            <h1>AGENDAMENTO</h1>
            <Input
                type='text'
                name='txt_time'
                placeHolder='Digite seu nome'
                text='Nome da cliente:'
            />

            <Input
                type='text'
                name='txt_time'
                placeHolder='Digite seu E-mail'
                text='Dados da cliente:'
            />

            <Select
                name='Procedimento'
                text='Escolha o procedimento desejado'
            />

            <Button
                rotulo='Agendar Horário'
            />
        </section>
    
    );
}

export default CreateTime