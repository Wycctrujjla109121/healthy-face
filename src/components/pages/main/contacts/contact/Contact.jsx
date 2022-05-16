import React from 'react';

//  COMPONENTS
import Link from './link/Link.jsx'
//  STYLES
import style from './contact.module.scss'

const contact = () => {
    return (
        <div className={style.contact}>
            <h2 className={style.contact__title}>Контакты</h2>
            <Link />
        </div>
    );
};

export default contact;