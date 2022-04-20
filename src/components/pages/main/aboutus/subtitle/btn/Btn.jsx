import React from 'react';

//  STYLES
import style from './btn.module.scss'

const Btn = () => {
    return (
        <div className={style.button}>
            <button className={style.button__left}></button>
            <button className={style.button__right}></button>
        </div>
    );
};

export default Btn;