import { Outlet, Link } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar = () => {
    return(
        <>
            <nav className={style.navbar}>

                <ul className={style.list}>
                    <Link to='/'>
                        <li className={style.item}><img className={style.logo} src="./logo.png"/></li>
                    </Link>

                    <Link to='/'>
                        <li className={style.item}>HOME</li>
                    </Link>

                    <Link to='/createTime'>
                        <li className={style.item}>HORÁRIOS</li>
                    </Link>

                    <Link to='/cadastroProcedimento'>
                        <li className={style.item}>CADASTRE o procedimento</li>
                    </Link>

                    <Link to='/cadastroCliente'>
                        <li className={style.item}>CADASTRE-SE</li>
                    </Link>
                </ul>
            
            </nav>

            <Outlet/>

        </>
    );
}

export default NavBar