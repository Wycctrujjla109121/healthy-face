import React from 'react';

//  COMPONENTS
import Item from './item/Item';
//  STYLES
import style from './product.module.scss'

const Product = () => {
    return (
        <div className={style.product}>
            <h3 className={style.product__title}>Товары:</h3>
            <div className={style.product__list}>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    );
};

export default Product;