import React from 'react';

//  STYLES
import style from './title.module.scss'

const title = () => {
    return (
        <div className={style.title}>
            <h2 className={style.title__text}>Make your face healty</h2>
        </div>
    );
};

export default title;