import React from 'react';

//  COMPONENTS 
import Logo from './logo/logo.jsx'
import Link from './link/link.jsx'
import Phone from './phone/phone.jsx'

//  STYLE
import style from './list.module.scss'

const list = () => {
    return (
        <div className={style.list}>
            <Logo />
            <Link />
            <Phone />
        </div>
    );
};

export default list;