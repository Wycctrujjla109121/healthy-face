import React from 'react';

//  COMPONENTS
import Grid from './grid/Grid.jsx'
import Btn from './btn/Btn.jsx'
//  STYLES
import style from './subtitle.module.scss'

const subtitle = () => {
    return (
        <div className={style.subtitle}>
            <h2 className={style.subtitle__header}>Полезное действие кремов</h2>
            <Grid />
            <Btn />
        </div>
    );
};

export default subtitle;