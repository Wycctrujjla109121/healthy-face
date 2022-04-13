import React from 'react';

//  COMPONENTS
import Form from './form/Form.jsx'

//  STYLES
import style from './feedback.module.scss'

const feedback = () => {
    return (
        <div className={style.feedback}>
            <h2 className={style.feedback__header}>Обратная связь по любым вопросам</h2>
            <h3 className={style.feedback__paragraf}>Если у вас есть какое-то предложение, замечание или вопрос в нашу сторону -
                <span className={style.feedback__paragraf__italic}> просим сообщить об этом нам</span>
            </h3>
            <Form />
        </div>
    );
};

export default feedback;