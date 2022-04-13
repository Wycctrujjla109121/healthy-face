import React from 'react';

//  Arrow img
import ArrowImg from './sumbitArrowImg/feedback__arrow.svg'
//  STYLES
import style from './submit.module.scss'

const submit = () => {
    return (
        <div className={style.submit}>
            <input className={style.submit__btn} type="submit" />
            <img className={style.submit__img} src={ArrowImg} alt="" />
        </div>
    );
};

export default submit;