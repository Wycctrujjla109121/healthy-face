import React, { useDebugValue } from 'react';

// STATE 
import state from '../../../../state/state'
//  STYLES
import style from './product.module.scss'

const product = (props) => {

    function addToCard({name, priceNew, priceOld, img}){
        state.push({name:name, priceNew:priceNew, priceOld:priceOld, img:img})
    }

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
            <button className={style.product__button} onClick={() => {addToCard(props)}}>Купить</button>
        </div>
    );
};

export default product;
