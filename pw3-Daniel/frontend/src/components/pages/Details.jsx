import { React, useState, useEffect } from "react";
import { useParams} from "react-router-dom";  
import style from "./Details.module.css";
import Button from "../Button";
import logo from "../../../public/logo.png"; 


const DetailProcedimento = () => {
   
    const  {id_procedimento} = useParams()
    console.log('CODIGO procedimento: ' + id_procedimento)

    
    const [procedimento, setProcedimento] = useState({})

    
    useEffect(()=>{

        fetch(`http://localhost:3000/procedimentos/${id_procedimento}`, {
            method: 'GET',
            mode:'cors',
            headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'*',
        },
        })
        .then((resp)=>resp.json())
        .then((data)=>{
        setProcedimento(data.data);
        console.log(data.data);
        })
        .catch((err)=>{console.log(err)});

        },[]);

    return(
        <div className={style.grid}>
            <div className={style.container_img}>
                <img className={style.img_procedimento_detail} src={logo} alt='Imagem de cabelo de mulher' />
            </div>

            <div className={style.info}>
                <span className={style.procedimento}>{procedimento.procedimento}</span>
                <span className={style.valor}>{procedimento.valor}</span>
                <span className={style.descricao}>{procedimento.descricao}
                </span>
            
                <div>
                    <Button 
                        label='EDITAR'
                        router='/updateprocedimento/'
                        cod_procedimento={procedimento.id_procedimento}
                    />

                    <Button 
                        label='EXCLUIR'
                        router='/deleteprocedimento/'
                        cod_procedimento={procedimento.id_procedimento}
                    />

                </div>
            </div>
        </div>
    )
}

export default DetailProcedimento;