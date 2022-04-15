import React from 'react';

//  STYLES
import style from './list.module.scss'
const List = (setActive) => {
    return (
        <div className={style.list}>
            <button className={style.list__btn} onClick={() => setActive.setActive(false)}></button>
            <div className={style.list__info}>
                <a className={style.list__info__link} href="#">О нас</a>
                <a className={style.list__info__link} href="#">Спреи</a>
                <a className={style.list__info__link} href="#">Заказать</a>
                <a className={style.list__info__link} href="#">Обратная связь</a>
                <p className={style.list__info__phone}>+7 999-999-99-99</p>
            </div>
        </div>
    );
};

export default List;