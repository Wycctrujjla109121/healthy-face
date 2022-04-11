import React from 'react';

//  IMG
import img from './itemBg/insctruction__pic.svg'
//  STYLES
import style from './item.module.scss'

const Item = (props) => {
    return (
        <div className={style.item}>
            <div className={style.item__info}>
                <div className={style.item__info__text}>
                    <h2 className={style.item__info__text__number}>{props.number}</h2>
                    <p className={style.item__info__text__desc}>{props.desc}</p>
                </div>

                <p className={style.item__info__slogan}>{props.slogan}</p>
            </div>

            <img className={style.item__img} src={img} alt="" />
        </div>
    );
};

export default Item;