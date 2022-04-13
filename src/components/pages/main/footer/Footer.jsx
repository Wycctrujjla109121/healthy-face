import React from 'react';

//  COMPONENTS
import Link from './link/Link.jsx'
import Logo from './logo/Logo.jsx';
import Contacts from './contacts/Contacts.jsx';

//  STYLES
import style from './footer.module.scss'

const footer = () => {
    return (
        <div className={style.footer}>
            <Link />

            <Logo />

            <Contacts />
        </div>
    );
};

export default footer;