import React from 'react';

//  IMG
import img from './svg/offer__photo.svg'
//  STYLES
import style from './offer.module.scss'

const offer = () => {
    return (
        <div className={style.offer}>
            <h2 className={style.offer__text}>Позаботьтесь о своей коже вместе с ZIN</h2>
            <img className={style.offer__img} src={img} alt="Картинка" />
        </div>
    );
};

export default offer;