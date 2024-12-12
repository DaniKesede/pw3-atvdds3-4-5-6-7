import React from 'react'
import style from './ContainerProcedimento.module.css'

const ContainerProcedimento = (props) => {
    return (
        <div className={style.container_procedimento}>
            {props.children}
        </div>
    )
}

export default ContainerProcedimento
