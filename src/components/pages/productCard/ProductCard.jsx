import React from 'react';

//  COMPONENTS
import Info from './info/Info';
import Desc from './desc/Desc';
//  STYLES
import style from './productCard.module.scss'

const ProductCard = () => {
    return (
        <div className={style.productCard}>
            <Info />

            <Desc />
        </div>
    );
};

export default ProductCard;