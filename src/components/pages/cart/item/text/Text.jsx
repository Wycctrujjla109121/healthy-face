import React from 'react';

//  STYLES
import style from './text.module.scss'

const Text = () => {
    return (
        <div className={style.text}>
            <h2 className={style.text__header}>Спрей Phyther</h2>
            <p className={style.text__slogan}>Phyther устраняет зуд и его симптомы за 60 секунд. Эффективность средства длится на протяжении...</p>
            <p className={style.text__price}>Цена: 99$ <span className={style.text__priceOld}>120$</span></p>
        </div>
    );
};

export default Text;