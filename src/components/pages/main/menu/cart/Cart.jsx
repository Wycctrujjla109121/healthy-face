import React from 'react';

//  IMG
import cartImg from './svg/shoppingBag.svg'
//  STYLES
import style from './cart.module.scss'
import { NavLink } from 'react-router-dom';

const Cart = () => {
    return (
        <NavLink to='/cart' className={style.cart}>
            <h2 className={style.cart__header}>(1)</h2>
        </NavLink>
    );
};

export default Cart;