import React from 'react';

//  img
import img from './itemBg/ourProducts__img.svg'
// COMPONENTS 
import Item from './item/Item.jsx'
//  STYLES
import style from './order.module.scss'

const order = () => {
    return (
        <div className={style.order}>
            <h1 className={style.order__header}>хотите заказать?</h1>
            <div className={style.order__list}>
                <Item img={img} text='Phyther' priceOld='129$' priceNew='99$'/>
                <Item img={img} text='Phyther' priceOld='129$' priceNew='99$'/>
                <Item img={img} text='Phyther' priceOld='129$' priceNew='99$'/>
                <Item img={img} text='Phyther' priceOld='129$' priceNew='99$'/>
                <Item img={img} text='Phyther' priceOld='129$' priceNew='99$'/>
                <Item img={img} text='Phyther' priceOld='129$' priceNew='99$'/>
                <Item img={img} text='Phyther' priceOld='129$' priceNew='99$'/>
                <Item img={img} text='Phyther' priceOld='129$' priceNew='99$'/>
                <Item img={img} text='Phyther' priceOld='129$' priceNew='99$'/>
                <Item img={img} text='Phyther' priceOld='129$' priceNew='99$'/>
            </div>
        </div>
    );
};

export default order;