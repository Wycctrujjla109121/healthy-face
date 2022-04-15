import React from 'react';

//  STYLES
import style from './link.module.scss'

const link = () => {
    return (
        <div className={style.link}>
            <a className={style.link__text} href="#">Главная</a>
            <a className={style.link__text} href="#">Наши спреи</a>
            <a className={style.link__text} href="#">Заказать</a>
            <a className={style.link__text} href="#">О нас</a>
        </div>
    );
};

export default link;