import React from 'react';

//  COMPONENTS
import List from './list/List.jsx'
//  STYLES
import style from './questions.module.scss';

const Questions = () => {
    return (
        <div className={style.questions}>
            <h2 className={style.questions__title}>Часто задаваемые вопросы</h2>
            <List />
        </div>
    );
};

export default Questions;