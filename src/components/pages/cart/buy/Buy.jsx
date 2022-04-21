import React from 'react';

//  STYLES
import style from './buy.module.scss'

const Buy = () => {
    return (
        <div className={style.buy}>
            <p className={style.buy__text}>Итого: 198$</p>
            <button className={style.buy__button}>Оформить заказ</button>
        </div>
    );
};

export default Buy;