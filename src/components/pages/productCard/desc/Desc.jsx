import React, { useState } from 'react';

//  STYLES
import style from './desc.module.scss'

const Desc = () => {

    const [add, setAdd] = useState(false);

    function addCard(){
        if (add === true){
            setAdd(false)
        }
        else{
            setAdd(true)
        }
    }

    return (
        <div className={style.desc}>
            <h2 className={style.desc__title}>Описание</h2>
            <p className={style.desc__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum</p>
            <p className={style.desc__price}>Цена: 99$ <span className={style.desc__priceOld}>120$</span></p>
            <button className={style.desc__button} onClick={addCard}>{(add ? 'В корзине' : 'В корзину!')}</button>
        </div>
    );
};

export default Desc;