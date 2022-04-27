import React, { useState } from 'react';

//  COMPONENTS
import Item from './item/Item.jsx'
//  STYLES
import style from './list.module.scss'

//  SCRIPT

const List = () => {
    const [faqs, setfaqs] = useState([
        {
            question:"Сколько стоит доставка?",
            answer: "В зависимости от региона где вы проживаете, вы можете оформить доставку любым удобным для вас способом: Оплата за доставку формируется организацией. Обычно стоимость составляет 299р. в пределах МКАДа и +100р. за каждые 20км. Вы можете заказать доставку Почтой России, СДЭК, Боксберри или забрать самовывозом из наших апетек-партнеров.",
            open: false
        },
        {
            question:"Можно ли получить скидку?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor ",
            open: false
        },
        {
            question:"Одобрен ли этот препарат врачами?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor ",
            open: false
        },
        {
            question:"Сколько времени вы занимаетесь производством медицинских перпаратов?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor ",
            open: false
        },
        {
            question:"Могу ли я найти ваши спреи в аптеках?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor ",
            open: false
        },
    ])


    const toggleFAQ = index => {
        setfaqs(faqs.map((faq,i) => {
            if (i === index){
                faq.open = !faq.open;
            }
            else{
                faq.open = false;
            }

            return faq;
        }))
    }

    return (
        <div className={style.list}>
            {faqs.map((faq, i) => (
                <Item faq={faq} index={i} toggleFAQ={toggleFAQ} key={i}/>
            ))}
        </div>
    );
};

export default List;