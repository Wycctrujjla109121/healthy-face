import React from 'react';

//  COMPONENTS
import List from './list/List.jsx'
//  STYLES
import style from './popup.module.scss'

const popup = ({ active, setActive }) => {
    return (
        <div className={active ? style.popup + ' ' + style.popup_active : style.popup}>
            <List setActive={setActive} />
            <div className={(active ? style.hide + ' ' + style.hide_active : style.hide)} onClick={() => setActive(false)}></div>
        </div>
    );
};

export default popup;