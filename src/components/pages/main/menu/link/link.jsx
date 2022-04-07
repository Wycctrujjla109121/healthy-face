import React from 'react';

//  STYLE
import style from '../menu.module.scss'

const link = () => {
    return (
        <div className={style.link}>
            <a href="#" className={style.link__text}>Главная</a>
            <a href="#" className={style.link__text}>Наши спреи</a>
            <a href="#" className={style.link__text}>Заказать</a>
            <a href="#" className={style.link__text}>О нас</a>
        </div>
    );
};

export default link;