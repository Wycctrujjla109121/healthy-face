import React from 'react';

//  STYLES
import style from '.././preview.module.scss'
const subtitle = () => {
    return (
        <div className={style.subtitle}>
            <div className={style.subtitle__container}>
                <p className={style.subtitle__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim adipiscing elit ut</p>

                <div className={style.subtitle__wrapper}>
                    <button className={style.subtitle__wrapper__button}>Купить спрей</button>
                    <svg className={style.subtitle__wrapper__img} width="143" height="8" viewBox="0 0 143 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M143 3.99999L137 0.535886L137 7.46409L143 3.99999ZM5.24537e-08 4.6L137.6 4.59999L137.6 3.39999L-5.24537e-08 3.4L5.24537e-08 4.6Z" fill="white" />
                    </svg>
                </div>

            </div>
            <h2 className={style.subtitle__slogan}>with<span className={style.subtitle__span}> Healthy face</span>
            </h2>
        </div>
    );
};

export default subtitle;