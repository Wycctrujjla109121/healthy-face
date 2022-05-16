import React from 'react';

// SVG
import svg from './svg/masterclass.svg'
// STYLES 
import style from './masterclass.module.scss'

const MasterClass = () => {
    return (
        <div className={style.masterclass}>
            <h2 className={style.masterclass__header}>Актуальные мероприятия</h2>
            <div className={style.masterclass__block}>
            <p className={style.masterclass__title}>Мастер-класс "ЗДОРОВАЯ КРАСОТА В ТВОИХ РУКАХ"</p>
            <img className={style.masterclass__img} src={svg} alt="" />
            <p className={style.masterclass__text}>23 ИЮЛЯ, 15:00, ТЦ "АВИАПАРК", 1 ЭТАЖ МАГАЗИН РИВГОШ</p>
            </div>
        </div>
    );
};

export default MasterClass;