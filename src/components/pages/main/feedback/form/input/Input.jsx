import React from 'react';

//  STYLES
import style from './input.module.scss'

const input = () => {
    return (
        <div className={style.input}>
            <input className={style.input__email} placeholder="EMAIL" type="email" />
            <input className={style.input__text} placeholder="ВАШЕ СООБЩЕНИЕ" type="text" />
        </div>
    );
};

export default input;