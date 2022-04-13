import React from 'react';

//  COMPONENTS
import Link from './link/Link.jsx'
//  STYLES
import style from './partner.module.scss'

const partner = () => {
    return (
        <div className={style.partner}>
            <h2 className={style.partner__title}>наши партнёры</h2>
            <p className={style.partner__text}>Мы начинаем развивать нашу серию кремов, и абсолютно любой крем вы можете купить, заказав у нас на сайте или купив в аптеках-партнерах</p>
            <Link />
        </div>
    );
};

export default partner;