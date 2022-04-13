import React, { useRef } from 'react';

//  STYLES
import style from './item.module.scss'

//  Script
const wrapper = React.createRef()
const btn = React.createRef()
function open(){
    if (wrapper.current.className == style.item__wrapper)
    {
        wrapper.current.className = style.item__wrapper__close;

        btn.current.className = style.item__wrapper__close__btn__close;
    }
    else{
        wrapper.current.className = style.item__wrapper;

        btn.current.className = style.item__wrapper__btn;
    }
}

const item = (props) => {
    return (
        <div className={style.item}>
            <h2 className={style.item__title}>{props.title}</h2>
            <div className={style.item__wrapper} ref={wrapper}>
                <button className={style.item__wrapper__btn} onClick={open} ref={btn}></button>
                <p className={style.item__wrapper__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor </p>
            </div>
        </div>
    );
};

export default item;