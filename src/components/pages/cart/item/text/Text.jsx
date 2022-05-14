import React, { useDebugValue } from 'react';

//  STYLES
import style from './text.module.scss'

const Text = ({name, priceNew, priceOld}) => {
    return (
        <div className={style.text}>
            <h2 className={style.text__header}>{name}</h2>
            <p className={style.text__slogan}>Phyther устраняет зуд и его симптомы за 60 секунд. Эффективность средства длится на протяжении...</p>
            <p className={style.text__price}>Цена: {priceNew} <span className={style.text__priceOld}>{priceOld}</span></p>
        </div>
    );
};

export default Text;