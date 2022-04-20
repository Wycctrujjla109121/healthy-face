import React from 'react';

//  STYLES
import style from './grid.module.scss'

const grid = () => {
    return (
        <div className={style.grid}>
            <div className={style.grid__block}>
                <h3 className={style.grid__title}>Восстанавливает кожу</h3>
                <p className={style.grid__desc}>Благодаря супер-нано-ультра формуле lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>

            <div className={style.grid__block}>
                <h3 className={style.grid__title}>Очищает поры</h3>
                <p className={style.grid__desc}>Повышенная текучесть состава позволяет lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>

            <div className={style.grid__block}>
                <h3 className={style.grid__title}>Восстанавливает кожу</h3>
                <p className={style.grid__desc}>Благодаря супер-нано-ультра формуле lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>

            <div className={style.grid__block}>
                <h3 className={style.grid__title}>Очищает поры</h3>
                <p className={style.grid__desc}>Благодаря супер-нано-ультра формуле lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>

            <div className={style.grid__block}>
                <h3 className={style.grid__title}>Восстанавливает кожу</h3>
                <p className={style.grid__desc}>Благодаря супер-нано-ультра формуле lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>

            <div className={style.grid__block}>
                <h3 className={style.grid__title}>Очищает поры</h3>
                <p className={style.grid__desc}>Благодаря супер-нано-ультра формуле lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>
        </div>
    );
};

export default grid;