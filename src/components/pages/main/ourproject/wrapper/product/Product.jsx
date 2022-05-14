import React from 'react';

// STATE 
import state from '../../../../state/state'
//  STYLES
import style from './product.module.scss'

const product = (props) => {

    const productNameRef = React.createRef(); 
    const productPriceNewRef = React.createRef(); 
    const productPriceOldRef = React.createRef(); 
    const productImg = React.createRef(); 

    function addToCard(){
        const productName = productNameRef.current.innerText
        const productPriceNew = productPriceNewRef.current.innerText
        const productPriceOld = productPriceOldRef.current.innerText

        state.push({name:productName, priceNew:productPriceNew, priceOld:productPriceOld})
    }

    return (
        <div className={style.product} ref={productImg} style={
            {
                backgroundImage: `url(${props.img})`,
                transform: `translateX(${props.offset}px)`
            }}>
            <div className={style.product__info}>
                <div className={style.product__price}>
                    <h3 className={style.product__priceNew} ref={productPriceNewRef}>{props.priceNew}</h3>
                    <h3 className={style.product__priceOld} ref={productPriceOldRef}>{props.priceOld}</h3>
                </div>
                <h3 className={style.product__text} ref={productNameRef}>{props.name}</h3>
            </div>
            <button className={style.product__button} onClick={addToCard}>Купить</button>
        </div>
    );
};

export default product;
