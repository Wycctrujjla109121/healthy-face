import React from 'react';

//  STYLES
import style from './item.module.scss'

const item = (props) => {
    return (
        <div className={style.item}>
            <img className={style.item__img} src={props.img} alt="" />
            <div className={style.item__info}>
                <h2 className={style.item__info__text}>{props.text}</h2>
                <div className={style.item__info__price}>
                    <p className={style.item__info__price__priceOld}>{props.priceOld}</p>
                    <p className={style.item__info__price__priceNew}>{props.priceNew}</p>
                </div>
            </div>
            <button className={style.item__btn}>Купить</button>
        </div>
    );
};

export default item;