import React from 'react';

//  STYLES
import style from './item.module.scss'

const item = (props) => {
    function AddToCard(){
        props.states.push({name:props.name, priceNew:props.priceNew, priceOld:props.priceOld, img:props.img})

        props.useStates([...props.states])
    }

    return (
        <div className={style.item}>
            <img className={style.item__img} src={props.img} alt="" />
            <div className={style.item__info}>
                <h2 className={style.item__text}>{props.text}</h2>
                <div className={style.item__price}>
                    <p className={style.item__priceOld}>{props.priceOld}</p>
                    <p className={style.item__priceNew}>{props.priceNew}</p>
                </div>
            </div>
            <button className={style.item__btn} onClick={() => AddToCard()}>Купить</button>
        </div>
    );
};

export default item;