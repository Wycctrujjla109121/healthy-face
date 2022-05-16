import React from 'react';

import img1 from './item/svg/product_1.png'
import img2 from './item/svg/product_2.png'
import img3 from './item/svg/product_3.png'
//  COMPONENTS
import Item from './item/Item';
//  STYLES
import style from './product.module.scss'

const Product = () => {
    return (
        <div className={style.product}>
            <h3 className={style.product__title}>Товары:</h3>
            <div className={style.product__list}>
                <Item img={img1}/>
                <Item img={img2}/>
                <Item img={img3}/>
                <Item img={img1}/>
            </div>
        </div>
    );
};

export default Product;