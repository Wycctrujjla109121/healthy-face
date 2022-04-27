import React from 'react';
import { NavLink } from 'react-router-dom';

//  STYLES
import style from './buy.module.scss'

const Buy = () => {
    return (
        <div className={style.buy}>
            <p className={style.buy__text}>Итого: 198$</p>
            <NavLink to='order' className={style.buy__button}>Оформить заказ</NavLink>
        </div>
    );
};

export default Buy;