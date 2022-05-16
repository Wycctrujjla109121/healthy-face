import React from 'react';
import { NavLink } from 'react-router-dom';

//  STYLES
import style from './buy.module.scss'

const Buy = ({states}) => {
    const fullPrice = () => states.reduce((prevProduct, curProduct) => parseInt(prevProduct) + parseInt(curProduct.priceNew), 0)

    return (
        <div className={style.buy}>
            <p className={style.buy__text}>Итого: {fullPrice()} р.</p>
            <NavLink to='order' className={style.buy__button}>Оформить заказ</NavLink>
        </div>
    );
};

export default Buy;