import React, { useState } from 'react';

//  COMPONENTS
import Popup from '../../popUp/Popup.jsx'
// STYLES
import style from './burger.module.scss'


const Burger = () => {
    const [active, setActive] = useState(false);


    function openPopUp() {
        if (active == true) {
            setActive(false)
        }
        else {
            setActive(true)
        }
    }

    return (
        <div className={style.popup}>
            <button className={style.popup__burger} onClick={openPopUp}></button>
            <Popup active={active} setActive={setActive} />
        </div>
    );
};

export default Burger;