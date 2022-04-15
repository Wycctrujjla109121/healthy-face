import React from 'react';

//  Arrow img
import ArrowImg from './sumbitArrowImg/feedback__arrow.svg'
import ArrowImg50 from './sumbitArrowImg/feedback__arrow_50.svg'
//  STYLES
import style from './submit.module.scss'

const submit = () => {
    return (
        <div className={style.submit}>
            <input className={style.submit__btn} type="submit" />
            <img className={style.submit__img} src={(window.screen.width > 420 ? ArrowImg : ArrowImg50)} alt="" />
        </div>
    );
};

export default submit;