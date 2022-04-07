import React from 'react';

//  COMPONENTS
import Title from './title/title.jsx'
import Subtitle from './subtitle/subtitle.jsx'

//  STYLES
import style from './preview.module.scss'

const preview = () => {
    return (
        <div className={style.list}>
            <Title />
            <Subtitle />
        </div>
    );
};

export default preview;