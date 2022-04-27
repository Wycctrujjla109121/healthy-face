import React from 'react';

// STYLES
import style from './form.module.scss'

const Form = () => {
    return (
        <form action="#" className={style.form}>
            <h3 className={style.form__title}>Ваши данные:</h3>
            <input className={style.form__input} type="text" placeholder='имя' />
            <input className={style.form__input} type="email" placeholder='электронная почта' />
            <input className={style.form__input} type="text" placeholder='адрес' />

            <div className={style.form__submit}>
                <p className={style.form__text}>Итого к оплате: 198$</p>
                <input className={style.form__button} type="submit" value='Оплатить' />
            </div>
        </form>
    );
};

export default Form;