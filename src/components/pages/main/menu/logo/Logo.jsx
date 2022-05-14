import React from 'react';

// STYLE 
import style from './logo.module.scss'

const Logo = () => {
    return (
        <div className={style.logo}>
            <h1 className={style.logo__text}>твоя кожа – в твоих руках</h1>
        </div>
    );
};

export default Logo;
