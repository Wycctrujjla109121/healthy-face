import React from 'react';

//  STYLES
import style from './submit.module.scss'

const Submit = ({send, submit, setSubmit}) => {

    return (
        <div className={style.submit}>
            <div className={style.submit__wrapper}>
                <button className={style.submit__button} onClick={() => send()}>Отправить
                    <svg className={style.submit__svg} width="143" height="7" viewBox="0 0 143 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={style.submit__fill} d="M143 3.49999L137 0.0358862L137 6.96409L143 3.49999ZM5.24537e-08 4.1L137.6 4.09999L137.6 2.89999L-5.24537e-08 2.9L5.24537e-08 4.1Z" fill="black" />
                    </svg>
                    <svg className={style.submit__svg__360} width="50" height="7" viewBox="0 0 50 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={style.submit__fill__360} d="M50 3.5L44 0.0359021L44 6.96411L50 3.5ZM-5.24537e-08 4.1L44.6 4.1L44.6 2.9L5.24537e-08 2.9L-5.24537e-08 4.1Z" fill="black" />
                    </svg>
                </button>
                <h2 className={submit ? style.submit__text + ' ' + style.submit__text__active : style.submit__text + ' ' + style.submit__text__disable}>{submit ? 'отправлено' : 'Введены не все данные'}</h2>
            </div>
        </div>
    );
};

export default Submit;