import React from 'react';
import { useState } from 'react';

//  IMG 
import img1 from './img/product_1.png'
import img2 from './img/product_2.png'
import img3 from './img/product_3.png'
// COMPONENTS 
import Item from './item/Item.jsx'
//  STYLES
import style from './order.module.scss'

const Order = ({states, useStates, defaultState}) => {

    const [product, setProduct] = useState([
        {
            priceNew: '1499 р.',
            priceOld: '2199 р.',
            name: 'Phyther',
            img: `${img1}`
        },
        {
            priceNew: '999 р.',
            priceOld: '1299 р.',
            name: 'Derma',
            img: `${img2}`
        },
        {
            priceNew: '1199 р.',
            priceOld: '1599 р.',
            name: 'Eco-phyther',
            img: `${img3}`
        }
    ])

    const resultProduct = Array.from(product.map((current, index) => {
        return <Item 
        key={index} 
        img={current.img} 
        text={current.name} 
        priceNew={current.priceNew} 
        priceOld={current.priceOld}
        states={states} useStates={useStates} defaultState={defaultState}/>
    }))

    return (
        <div className={style.order}>
            <h1 className={style.order__header}>хотите заказать?</h1>
            <div className={style.order__list}>
                {resultProduct}
            </div>
        </div>
    );
};

export default Order;