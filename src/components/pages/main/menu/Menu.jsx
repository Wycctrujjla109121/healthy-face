import React from 'react';

//  COMPONENTS 
import Logo from './logo/Logo.jsx'
import Link from './link/Link.jsx'
import Phone from './phone/Phone.jsx'
import Burger from './burger/Burger.jsx'

//  STYLE
import style from './menu.module.scss'

const list = (props) => {
    return (
        <div className={style.list}>
            <Logo />
            <Link />
            <Phone />
            <Burger />
        </div>
    );
};

export default list;
