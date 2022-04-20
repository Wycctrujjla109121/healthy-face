import React from 'react';

//  STYLES
import style from './submit.module.scss'

const submit = () => {
    return (
        <div className={style.submit}>
            <button className={style.submit__button}>Отправить</button>
        </div>
    );
};

export default submit;