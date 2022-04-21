import React, { useState } from 'react';

//  STYLES
import style from './input.module.scss'

const input = (props) => {


    return (
        <div className={style.input}>
            <input ref={props.Email} className={style.input__email} placeholder="EMAIL" type="email"/>
            <input ref={props.Text} className={style.input__text} placeholder="ВАШЕ СООБЩЕНИЕ" type="text"/>
        </div>
    );
};

export default input;