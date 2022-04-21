import React from 'react';

//  IMG
import productImg from './svg/Product__img.svg'
//  COMPONENTS
import Button from './button/Button.jsx'
//  STYLES
import style from './info.module.scss'

const Info = () => {
    return (
        <div className={style.info}>
            <h2 className={style.info__title}>Спрей Phyther</h2>
            <img className={style.info__img} src={productImg} alt="" />
            
            <Button />
        </div>
    );
};

export default Info;