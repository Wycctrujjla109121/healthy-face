import React from 'react';

//  COMPONENTS
import List from './list/List.jsx'
//  STYLES
import style from './popup.module.scss'

const popup = ({active, setActive}) => {
    return (
        <div className={active ? style.popup__active : style.popup__disable}>
            <List setActive={setActive}/>
        </div>
    );
};

export default popup;