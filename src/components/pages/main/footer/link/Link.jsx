import React from 'react';
import { NavLink } from 'react-router-dom';

//  STYLES
import style from './link.module.scss'

const link = () => {
    return (
        <div className={style.link}>
            <NavLink to='/' className={style.link__text}>О нас</NavLink>
            <NavLink to='productCard' className={style.link__text}>Спреи</NavLink>
            <a className={style.link__text} href="#">Заказать</a>
            <a className={style.link__text} href="#">Обратная связь</a>
        </div>
    );
};

export default link;