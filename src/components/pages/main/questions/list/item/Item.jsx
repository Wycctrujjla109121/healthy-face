import React from 'react';

//  STYLES
import style from './item.module.scss'


const item = ({faq, index, toggleFAQ}) => {
    return (
        <div className={style.item}>
            <h2 className={style.item__title}>{faq.question}</h2>
            <div className={(faq.open ? style.item__wrapper + ' ' + style.item__wrapper_open : style.item__wrapper)} key={index}>
                <button className={(faq.open ?  style.item__button + ' ' + style.item__button_open : style.item__button)} onClick={() => toggleFAQ(index)}></button>
                <p className={style.item__text}>{faq.answer}</p>
            </div>
        </div>
    );
};

export default item;