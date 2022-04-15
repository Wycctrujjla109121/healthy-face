import React from 'react';

//  COMPONENTS
import Wrapper from './wrapper/Wrapper';
import Showmore from './showMore/Showmore';
//  STYLES
import style from './ourproject.module.scss'

const ourproject = () => {
    return (
        <div className={style.ourproject}>
            <h2 className={style.ourproject__title}>Наши продукты</h2>

            <Wrapper />

            <Showmore />
        </div>
    );
};

export default ourproject;
