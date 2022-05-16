import React, { useState } from 'react';

// COMPONENTS
import PopUp from './popUp/PopUp';
// STYLES
import style from './form.module.scss'

const Form = ({states}) => {

    const [visibility, setVisibility] = useState(false)

    function popUp(e){
        e.preventDefault()

        if(visibility != true){
            setVisibility(true)
        }
        else{
            setVisibility(false)
        }
    }

    function cost(){
        const allPrice = states.reduce((prevProduct, currentProduct) => parseInt(prevProduct) + parseInt(currentProduct.priceNew), 0)
        return allPrice
    }

    return (
        <form onSubmit={popUp} className={style.form}>

            <PopUp states={states} visibility={visibility}/>

            <h3 className={style.form__title}>Ваши данные:</h3>
            <input className={style.form__input} type="text" placeholder='имя' required/>
            <input className={style.form__input} type="email" placeholder='электронная почта' required/>
            <input className={style.form__input} type="text" placeholder='адрес' required/>

            <div className={style.form__submit}>
                <p className={style.form__text}>Итого к оплате: {cost()} р</p>
                <input className={style.form__button} type="submit" value='Оплатить' />
            </div>
        </form>
    );
};

export default Form;