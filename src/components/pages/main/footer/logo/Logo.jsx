import React from 'react';

//  IMG LOGO
import logoImg from './svg/logo.png'
//  STYLES
import style from './logo.module.scss';

const logo = () => {
    return (
        <div className={style.logo}>
            <img className={style.logo__img} src={logoImg} alt="" />
            <h2 className={style.logo__title}>ZIN</h2>
        </div>
    );
};

export default logo;