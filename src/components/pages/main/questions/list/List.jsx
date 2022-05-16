import React, { useState } from 'react';

//  COMPONENTS
import Item from './item/Item.jsx'
//  STYLES
import style from './list.module.scss'

//  SCRIPT

const List = () => {
    const [faqs, setfaqs] = useState([
        {
            question: "«Информация о доставке»",
            answer: "Бесплатная доставка при сумме заказа от 3000 рублей по территории России. Срок доставки от 1 до 3 рабочих дней. *Стоимость порога бесплатной доставки может меняться в зависимости от населенного пункта и выбранной транспортной компании. Окончательная стоимость доставки доступна при оформлении заказа.",
            open: false
        },
        {
            question: "«Программа лояльности»",
            answer: "Бесплатная доставка от 3000 рублей. 3 миниатюры в подарок от 2000 рублей. Скидка 5% при оплате картой МИР.",
            open: false
        },
        {
            question: "«Наше преимущество»",
            answer: "Благодаря совместной работе с дерматологами продукция ZIN по уходу за кожей подходит не только для взрослых, но и для детей. Множество текстур позволяет подобрать продукцию для любого типа кожи с учетом индивидуальных особенностей",
            open: false
        },
    ])


    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open;
            }
            else {
                faq.open = false;
            }

            return faq;
        }))
    }

    return (
        <div className={style.list}>
            {faqs.map((faq, i) => (
                <Item faq={faq} index={i} toggleFAQ={toggleFAQ} key={i} />
            ))}
        </div>
    );
};

export default List;