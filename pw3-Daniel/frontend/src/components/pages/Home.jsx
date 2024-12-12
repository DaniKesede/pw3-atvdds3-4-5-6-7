import React from "react";
import style from "./Home.module.css";
import ListProcedimento from "./ListProcedimetos";

const Home = () => {
    return(
        <>

            <section className={style.home_container}>

                <h1>Bem vindas ao <span>HairdresserPolly</span></h1>
                <p>Sua beleza merece um tratamento nível HairdresserPolly</p>
                <img className={style.mae} src= "./mae.jpg"/>
                <ListProcedimento/>
            </section>

        </>
    );
}

export default Home
