import React from 'react';

//  IMG
import img from './offerimg/offer__photo.svg'
//  STYLES
import style from './offer.module.scss'

const offer = () => {
    return (
        <div className={style.offer}>
            <h2 className={style.offer__text}>Мы производим кремы, которые помогли уже более сотне человек побороть проявления дерматита</h2>
            <img className={style.offer__img} src={img} alt="" />
        </div>
    );
};

export default offer;