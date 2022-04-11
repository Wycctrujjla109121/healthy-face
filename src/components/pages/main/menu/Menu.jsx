import React from 'react';

//  COMPONENTS 
import Logo from './logo/Logo.jsx'
import Link from './link/Link.jsx'
import Phone from './phone/Phone.jsx'

//  STYLE
import style from './menu.module.scss'

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
