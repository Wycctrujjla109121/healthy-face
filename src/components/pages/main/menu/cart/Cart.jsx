import React from 'react';


//  STYLES
import style from './cart.module.scss'
import { NavLink } from 'react-router-dom';

const Cart = ({ states, defaultState }) => {
    return (
        <NavLink to='/cart' className={style.cart}>
            <h2 className={style.cart__header}>({states.length})</h2>
        </NavLink>
    );
};

export default Cart;