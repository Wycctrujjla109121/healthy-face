import React from 'react';

//  STYLES
import style from './contacts.module.scss'

const contacts = () => {
    return (
        <div className={style.contacts}>
            <a className={style.contacts__email} href="#">healthyface@mail.com</a>
            <a className={style.contacts__phone} href="#">+7 999 999-99-99</a>
            <a className={style.contacts__email} target='_blank' href="https://vk.com/zin_c">vk.com/zin_c</a>
        </div>
    );
};

export default contacts;