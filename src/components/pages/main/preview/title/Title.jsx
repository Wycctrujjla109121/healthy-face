import React from 'react';

//  STYLES
import style from './title.module.scss'

const title = () => {
    return (
        <div className={style.title}>
            <h2 className={style.title__text}>Твоя красота</h2>
        </div>
    );
};

export default title;
