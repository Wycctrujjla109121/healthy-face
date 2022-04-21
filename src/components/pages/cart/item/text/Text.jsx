import React from 'react';

//  STYLES
import style from './text.module.scss'

const Text = () => {
    return (
        <div className={style.text}>
            <h2 className={style.text__header}>Спрей Phyther</h2>
            <p className={style.text__slogan}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna</p>
            <p className={style.text__price}>Цена: 99$ <span className={style.text__priceOld}>120$</span></p>
        </div>
    );
};

export default Text;