import React from 'react';

//  COMPONENTS
import Item from './item/Item.jsx'
import Buy from './buy/Buy.jsx'
//  STYLE
import style from './cart.module.scss'

const Cart = () => {
    return (
        <div className={style.cart}>
            <div className={style.cart__list}>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>

            <div className={style.cart__buy}>
                <Buy />
            </div>
        </div>
    );
};

export default Cart;