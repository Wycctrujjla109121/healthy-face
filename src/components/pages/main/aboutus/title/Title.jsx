import React from 'react';

//  STYLES
import style from './title.module.scss'

const title = () => {
    return (
        <div className={style.title}>
            <h2 className={style.title__header}>о нас</h2>
            <p className={style.title__slogan}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nullaporttitor rhoncus dolor purus non enim praesent </p>
        </div>
    );
};

export default title;