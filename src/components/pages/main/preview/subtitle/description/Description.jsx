import React from 'react';

//  ARROW IMG
import arrowImg from './arrowImg/arrowImg.svg'
//  STYLES
import style from './description.module.scss'

const description = () => {
    return (
        <div className={style.description}>
            <p className={style.description__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim adipiscing elit ut</p>
            <div className={style.description__wrapper}>
                <button className={style.description__wrapper__button}>Купить спрей</button>
                <img className={style.description__wrapper__img} src={arrowImg} alt="" />
            </div>
        </div>
    );
};

export default description;