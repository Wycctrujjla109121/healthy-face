import React from 'react';
import { NavLink } from 'react-router-dom';

// STATE
import state from '../../state/state';
//  STYLES
import style from './button.module.scss'

const Button = () => {
    return (
        <div className={state.length > 0 ? style.button__hidden : style.button}>
            <p className={style.button__text}>В корзине пока ничего нет</p>
            <NavLink to='/' className={style.button__link}>На главную</NavLink>
        </div>
    );
};

export default Button;