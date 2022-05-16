import React from 'react';

// STYLE 
import style from './popUp.module.scss'

const PopUp = ({ states, visibility }) => {

    const result = states.map((current, index) => {
        return (
            <div className={style.item} key={index}>
                <img className={style.item__img} src={current.img} alt="" />
                <p className={style.item__text}>{current.name}</p>
                <p className={style.item__price}>Цена: {parseInt(current.priceNew)} р.</p>
            </div>
        )
    })

    function fullPrice() {
        const cost = states.reduce((perProduct, currentProduct) => parseInt(perProduct) + parseInt(currentProduct.priceNew), 0)
        return cost
    }

    return (
        <div className={visibility ? style.popUp + ' ' + style.popUp__visibility : style.popUp + ' ' + style.popUp__hidden}>
            <div className={style.popUp__info}>
                <h1 className={style.popUp__header}>Благодарим за покупку</h1>
                <p className={style.popUp__title}>Вы заказали: </p>
                <div className={style.popUp__list}>
                    {result}
                </div>
                <p className={style.popUp__fullPrice}>{fullPrice()} р.</p>
                <h1 className={style.popUp__header}>Скоро вам перезвонят для уточнения заказа</h1>
                <div className={style.popUp__button}>
                    <button className={style.popUp__btn}>Хорошо</button>
                </div>
            </div>
        </div>
    );
};

export default PopUp;