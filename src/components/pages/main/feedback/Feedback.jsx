import React from 'react';

//  COMPONENTS
import Form from './form/Form.jsx'

//  STYLES
import style from './feedback.module.scss'

const feedback = () => {
    return (
        <div className={style.feedback}>
            <h2 className={style.feedback__header}>Обратная связь</h2>
            <h3 className={style.feedback__paragraf}>Подписка на новости
                Подпишитесь и узнавайте о наших новинках, эксклюзивных предложениях, мероприятиях и о многом другом.
            </h3>
            <Form />
        </div>
    );
};

export default feedback;