import React from 'react';

//  STYLES
import style from './item.module.scss'

const Item = (props) => {
    return (
        <div className={style.item}>
            <img className={style.item__img} src={props.img} alt="Картинка" />
            <div className={style.item__info}>
                <h3 className={style.item__header}>Спрей Phyther</h3>
                <p className={style.item__price}>Цена: 1199 р <span className={style.item__priceOld}>1399 р</span></p>
            </div>
        </div>
    );
};

export default Item;