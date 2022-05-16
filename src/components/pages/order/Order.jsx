import React from 'react';

//  COMPONENTS
import Form from './form/Form';
import Product from './product/Product';
//  STYLES
import style from './order.module.scss'

const Order = ({states}) => {
    return (
        <div className={style.order}>
            <h1 className={style.order__header}>Оформление заказа</h1>
            <div className={style.order__info}>
                <Form states={states}/>

                <Product states={states}/>
            </div>
            <div className={style.order__submit}>
                <p className={style.order__text}>Итого к оплате: 1199 р</p>
                <button className={style.order__button}>Оплатить</button>
            </div>
        </div>
    );
};

export default Order;