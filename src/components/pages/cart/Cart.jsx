import React from 'react';

//  COMPONENTS
import Item from './item/Item.jsx'
import Buy from './buy/Buy.jsx'
import Button from './button/Button.jsx';
//  STYLE
import style from './cart.module.scss'

const Cart = () => {
    return (
        <div className={style.cart}>

            <Button />

            <div className={style.cart__info}>
                <div className={style.cart__list}>
                    {/* <Item /> */}
                    {/* <Item /> */}
                    {/* <Item /> */}
                    {/* <Item /> */}
                </div>

                <div className={style.cart__buy}>
                    <Buy />
                </div>
            </div>
        </div>
    );
};

export default Cart;