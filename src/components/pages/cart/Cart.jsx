import React from 'react';

// STATE
import state from '../state/state.js';
//  COMPONENTS
import Item from './item/Item.jsx'
import Buy from './buy/Buy.jsx'
import Button from './button/Button.jsx';
//  STYLE
import style from './cart.module.scss'

const Cart = () => {

    const result = state.map((state, info) => {
        return (
            <Item key={info} name={state.name} priceNew={state.priceNew} priceOld={state.priceOld}/>
        )
    })

    return (
        <div className={style.cart}>

                <Button />

            <div className={style.cart__info}>
                <div className={style.cart__list}>
                    {result}
                </div>

                <div className={style.cart__buy}>
                    <Buy />
                </div>
            </div>
        </div>
    );
};

export default Cart;