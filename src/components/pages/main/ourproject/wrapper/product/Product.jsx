import React from 'react';

//  STYLES
import style from './product.module.scss'

const product = (props) => {
    return (
        <div className={style.product} style={
            {
                backgroundImage: `url(${props.img})`,
                transform: `translateX(${props.offset}px)`
            }}>
            <div className={style.product__info}>
                <div className={style.product__price}>
                    <h3 className={style.product__priceNew}>{props.priceNew}</h3>
                    <h3 className={style.product__priceOld}>{props.priceOld}</h3>
                </div>
                <h3 className={style.product__text}>{props.name}</h3>
            </div>
            <button className={style.product__button}>Купить</button>
        </div>
    );
};

export default product;
