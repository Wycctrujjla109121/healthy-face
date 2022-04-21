import React from 'react';

//  STYLES
import style from './button-500.module.scss'

const Button_500 = () => {
    return (
        <div className={style.button}>
            <button className={style.button__remove}></button>
            <p className={style.button__number}>1</p>
            <button className={style.button__add}></button>
        </div>
    );
};

export default Button_500;