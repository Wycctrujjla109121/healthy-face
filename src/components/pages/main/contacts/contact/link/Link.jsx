import React from 'react';

//  STYLE
import style from './link.module.scss'

const link = () => {
    return (
        <div className={style.link}>
            <a href='#' target='_blank' className={style.link__mail}>healthyface@mail.com</a>
            <a href='#' target='_blank' className={style.link__phone}>8 987 126-76-52</a>
        </div>
    );
};

export default link;