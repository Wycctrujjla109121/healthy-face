import React from 'react';

//  STYLES
import style from './item.module.scss'

const Item = ({name, priceNew, priceOld, img}) => {
    return (
        <div className={style.item}>
            <img className={style.item__img} src={img} alt="Картинка" />
            <div className={style.item__info}>
                <h3 className={style.item__header}>{name}</h3>
                <p className={style.item__price}>Цена: {priceNew} р <span className={style.item__priceOld}>{priceOld} р</span></p>
            </div>
        </div>
    );
};

export default Item;