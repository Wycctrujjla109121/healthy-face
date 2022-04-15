import React from 'react';

//  COMPONENTS
import Menu from './menu/Menu.jsx'
import Preview from './preview/Preview.jsx'
import Showspray from './showspray/Showspray.jsx'
import Ourproject from './ourproject/Ourproject.jsx'
import Offer from './offer/Offer.jsx'
import Aboutus from './aboutus/Aboutus.jsx';
import Instruction from './instruction/Instruction.jsx';
import Contacts from './contacts/Contacts.jsx';
import Questions from './questions/Questions.jsx';
import Order from './order/Order.jsx'
import Feedback from './feedback/Feedback.jsx';
import Footer from './footer/Footer.jsx'
//  STYLES
import style from './main.module.scss'

const main = () => {
    return (
        <div className={style.main}>
            <Menu />

            <Preview />

            <Showspray />

            <Ourproject />

            <Offer />

            <Aboutus />

            <Instruction />

            <Contacts />

            <Questions />

            <Order />

            <Feedback />

            <Footer /> 
        </div>
    );
};

export default main;
