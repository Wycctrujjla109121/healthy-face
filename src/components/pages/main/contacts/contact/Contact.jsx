import React from 'react';

//  COMPONENTS
import Link from './link/Link.jsx'
//  STYLES
import style from './contact.module.scss'

const contact = () => {
    return (
        <div className={style.contact}>
            <h2 className={style.contact__title}>Контакты. Где найти нас?</h2>
            <p className={style.contact__text}>Мы работаем онлайн и в лабораториях, в которых ищем новые способы решения проблем с кожей. А также эксперементируем с новыми продуктами для нашей линейки. Вы можете всегда найти нашу поддержку позвонив по телефону и написав на почту, указанные ниже. Мы не имеем собственного офиса продаж, Также вы можете написать нам по любому вопросу или заказать спрей, заполнив форму ниже и задав интересующий вопрос или указав продукт, который хотите приобрести</p>
            <Link />
        </div>
    );
};

export default contact;