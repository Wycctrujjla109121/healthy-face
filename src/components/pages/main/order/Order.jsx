import React from 'react';

//  IMG 
import img1 from './img/product_1.png'
import img2 from './img/product_2.png'
import img3 from './img/product_3.png'
// COMPONENTS 
import Item from './item/Item.jsx'
//  STYLES
import style from './order.module.scss'

const order = () => {
    return (
        <div className={style.order}>
            <h1 className={style.order__header}>хотите заказать?</h1>
            <div className={style.order__list}>
                <Item img={img1} text='Phyther' priceNew='1199 р' priceOld='1399 р'/>
                <Item img={img2} text='Phyther' priceNew='1199 р' priceOld='1399 р'/>
                <Item img={img3} text='Phyther' priceNew='1199 р' priceOld='1399 р'/>
            </div>
        </div>
    );
};

export default order;