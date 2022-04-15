import React from 'react';

//  COMPONENTS
import Description from './description/Description.jsx';
//  STYLES
import style from './subtitle.module.scss'

const subtitle = () => {
    return (
        <div className={style.subtitle}>
            <Description />
            <h2 className={style.subtitle__slogan}>with<span className={style.subtitle__span}> Healthy face</span></h2>
        </div>
    );
};

export default subtitle;
