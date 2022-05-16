import React from 'react';

import img1 from './item/svg/product_1.png'
import img2 from './item/svg/product_2.png'
import img3 from './item/svg/product_3.png'
//  COMPONENTS
import Item from './item/Item';
//  STYLES
import style from './product.module.scss'

const Product = ({ states }) => {

    const item = states.map((current, index) =>
        <Item
            name={current.name}
            priceNew={current.priceNew}
            priceOld={current.priceOld}
            img={current.img} 
            key={index}/>)

    return (
        <div className={style.product}>
            <h3 className={style.product__title}>Товары:</h3>
            <div className={style.product__list}>
                {item}
            </div>
        </div>
    );
};

export default Product;