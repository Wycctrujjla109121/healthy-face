import React from 'react';

//  STYLES
import style from './showspray.module.scss'

const showspray = () => {
    return (
        <div className={style.showspray}>
            <button className={style.showspray__button}>Показать спреи</button>
        </div>
    );
};

export default showspray;
