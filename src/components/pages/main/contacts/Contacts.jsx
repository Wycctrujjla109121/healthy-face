import React from 'react';

//  COMPONENTS
import Contact from './contact/Contact.jsx'
import Partner from './partner/Partner.jsx';
import Map from './map/Map.jsx'
//  STYLES
import style from './contacts.module.scss'

const contacts = () => {
    return (
        <div className={style.contacts}>
            <Contact />
            <Partner />
            <Map />
        </div>
    );
};

export default contacts;