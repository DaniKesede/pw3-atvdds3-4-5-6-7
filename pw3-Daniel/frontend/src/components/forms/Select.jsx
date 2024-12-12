import styles from './Select.module.css' 

function Select({name, text}) {
    return(
        <>
            <div className={styles.form_control}>
                <label hmtlFor={name}>{text}</label>
                <select name={name} id={name}>
                    <option>Selecione um procedimento</option>
                    <option>Hidratação Profunda</option>
                    <option>Banho e Brilho</option>
                    <option>Relaxamento</option>
                    <option>Progressiva</option>
                </select>
            </div>
        </>
    );
};
export default Select;