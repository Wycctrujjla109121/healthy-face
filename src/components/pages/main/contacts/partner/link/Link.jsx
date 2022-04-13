import React from 'react';

//  STYLES
import style from './link.module.scss'
const link = () => {
    return (
            <div className={style.link}>
                <a className={style.link__site} href="#" target='_blank'>apteka.ru</a>
                <a className={style.link__site} href="#" target='_blank'>rigla.ru</a>
            </div>
    );
};

export default link;