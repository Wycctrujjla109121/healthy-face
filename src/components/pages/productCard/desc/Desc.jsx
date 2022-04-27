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
            <p className={style.desc__text}>Phyther устраняет зуд и его симптомы за 60 секунд. Эффективность средства длится на протяжении шести часов. У него текстура легкой эмульсии и удобный спрей-распылитель, с помощью которого его можно наносить даже на самые труднодоступные места. Помогает справляться с экземой.</p>
            <p className={style.desc__price}>Цена: 99$ <span className={style.desc__priceOld}>120$</span></p>
            <button className={style.desc__button} onClick={addCard}>{(add ? 'В корзине' : 'В корзину!')}</button>
        </div>
    );
};

export default Desc;