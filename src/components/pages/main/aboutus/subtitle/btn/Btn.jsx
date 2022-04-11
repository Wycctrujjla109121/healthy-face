import React from 'react';

//  STYLES
import style from './btn.module.scss'

const Btn = () => {
    return (
        <div className={style.btn}>
            <button className={style.btn__left}></button>
            <button className={style.btn__right}></button>
        </div>
    );
};

export default Btn;