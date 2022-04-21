import React from 'react';

//  STYLES
import style from './button.module.scss'
const Button = () => {
    return (
        <div className={style.button}>
            <button className={style.button__left}></button>
            <button className={style.button__right}></button>
        </div>
    );
};

export default Button;