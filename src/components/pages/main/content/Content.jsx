import React from 'react';

//  COMPONENTS
import Preview from '../preview/Preview.jsx'
import Showspray from '../showspray/Showspray.jsx'
import Ourproject from '../ourproject/Ourproject.jsx'
import Offer from '../offer/Offer.jsx'
import Aboutus from '../aboutus/Aboutus.jsx';
import Instruction from '../instruction/Instruction.jsx';
import Contacts from '../contacts/Contacts.jsx';
import Questions from '../questions/Questions.jsx';
import Order from '../order/Order.jsx'
import Feedback from '../feedback/Feedback.jsx';
import MasterClass from '../masterclass/Masterclass.jsx';
//  STYLES
import style from './content.module.scss'

const Content = ({states, defaultState}) => {
    return (
        <div className={style.content}>
            <Preview />

            <Showspray />

            <Ourproject states={states} defaultState={defaultState}/>

            <Offer />

            <Aboutus />

            <Instruction />

            <Contacts />

            <Questions />

            <Order />

            <MasterClass />

            <Feedback />
        </div>
    );
};

export default Content;