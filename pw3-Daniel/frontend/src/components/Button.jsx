// import style from './Button.module.css'
import { Link } from 'react-router-dom'

const Button = ({label, router, id_procedimento}) => {
    return(
        <div >

            <Link to={`${router}${id_procedimento}`}>
                <button>{label}</button>
            </Link>
            
        </div>
    )
}

export default Button