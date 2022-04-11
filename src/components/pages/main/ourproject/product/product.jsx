import React from 'react';

//  STYLES
import style from './product.module.scss'

const product = (props) => {
    return (
        <div className={style.product}>
            <div className={style.product__info}>
                <div className={style.product__info__price}>
                    <h3 className={style.product__info__price__priceNew}>{props.priceNew}</h3>
                    <h3 className={style.product__info__price__priceOld}>{props.priceOld}</h3>
                </div>
                <h3 className={style.product__info__text}>{props.name}</h3>
            </div>
            <button className={style.product__btn}>Купить</button>
        </div>
    );
};

export default product;