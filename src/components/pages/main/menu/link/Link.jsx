import React from 'react';
import { NavLink } from 'react-router-dom';

//  STYLE
import style from './link.module.scss'

const link = () => {
    return (
        <div className={style.link}>
            <NavLink to="/" className={style.link__text}>Главная</NavLink>
            <NavLink to="/productCard" className={style.link__text}>Cпреи</NavLink>
            <a href="#" className={style.link__text}>Заказать</a>
            <a href="#" className={style.link__text}>О нас</a>
        </div>
    );
};

export default link;
