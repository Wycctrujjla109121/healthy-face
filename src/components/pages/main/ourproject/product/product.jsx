import React from 'react';



//  STYLES
import style from '../ourproject.module.scss'
const product = (props) => {
    return (
        <div className={style.product}>
            <div className={style.product__info}>
                <div className={style.product__info__price__name}>
                    <div className={style.product__info__price}>
                        <h3 className={style.product__info__price__new}>{props.priceNew}</h3>
                        <h3 className={style.product__info__price__old}>{props.priceOld}</h3>
                    </div>
                    <div className={style.product__info__name}>
                        <h3 className={style.product__info__name__text}>{props.name}</h3>
                    </div>
                </div>
                    <button className={style.product__info__btn}>Купить</button>
            </div>
        </div>
    );
};

export default product;