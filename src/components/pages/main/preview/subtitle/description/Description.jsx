import React from 'react';

//  STYLES
import style from './description.module.scss'

const description = () => {
    return (
        <div className={style.description}>
            <p className={style.description__text}>Восстановите свою кожу после повреждений. Мы производим спери, которые помогут сделать ваше лицо здоровым и обеспечат за ним качественный уход. </p>
            <div className={style.description__wrapper}>
                <button className={style.description__button}>Купить спрей</button>
                <svg className={style.description__img} width="143" height="8" viewBox="0 0 143 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={style.description__img__fill} d="M143 3.99999L137 0.535886L137 7.46409L143 3.99999ZM5.24537e-08 4.6L137.6 4.59999L137.6 3.39999L-5.24537e-08 3.4L5.24537e-08 4.6Z" fill="black" />
                </svg>
            </div>
        </div>
    );
};

export default description;