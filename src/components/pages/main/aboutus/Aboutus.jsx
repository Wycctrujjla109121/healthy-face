import React from 'react';

//  COMPONENTS
import Subtitle from './subtitle/Subtitle.jsx'
import Title from './title/Title.jsx'
//  STYLES
import style from './aboutus.module.scss'

const aboutus = () => {
    return (
        <div className={style.aboutus}>
            <Title />

            <Subtitle />
        </div>
    );
};

export default aboutus;