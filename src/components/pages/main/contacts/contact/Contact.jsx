import React from 'react';

//  COMPONENTS
import Link from './link/Link.jsx'
//  STYLES
import style from './contact.module.scss'

const contact = () => {
    return (
        <div className={style.contact}>
            <h2 className={style.contact__title}>Контакты. Где найти нас?</h2>
            <p className={style.contact__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nullaporttitor rhoncus dolor purus non enim praesent </p>
            <Link />
        </div>
    );
};

export default contact;