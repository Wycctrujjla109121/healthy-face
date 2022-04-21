import React from 'react';

//  STYLES
import style from './button-500.module.scss'

const Button_500 = () => {
    return (
        <div className={style.button}>
            <button className={style.button__remove}>
                <svg className={style.button__svg} width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line className={style.button__remove__svg} y1="1" x2="15" y2="1" stroke="white" />
                </svg>
            </button>
            <p className={style.button__number}>1</p>
            <button className={style.button__add}>
                <svg className='svg' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line className={style.button__add__svg} x1="7.5" y1="-2.18557e-08" x2="7.5" y2="15" stroke="white" />
                    <line className={style.button__add__svg} y1="7.5" x2="15" y2="7.5" stroke="white" />
                </svg>
            </button>
        </div>
    );
};

export default Button_500;