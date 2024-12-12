// import style from './CardDoce.module.css';
import Button from '../Button'

const CardProcedimento = ({ nome, procedimento, valor, imagem, id_procedimento }) => {
    
    return(
        <div>
           <h2>{procedimento}</h2>
            <p> R${valor}</p>
            <img src={imagem} alt={nome} title={{nome}} />
            <div>
                <Button label='DETALHE' router='/Details/' id_procedimento={id_procedimento}/>
            </div>
        </div>
    )
}

export default CardProcedimento
