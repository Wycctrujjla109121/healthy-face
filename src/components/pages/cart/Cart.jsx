import React from 'react';

//  COMPONENTS
import Item from './item/Item.jsx'
import Buy from './buy/Buy.jsx'
import Button from './button/Button.jsx';
//  STYLE
import style from './cart.module.scss'

const Cart = ({states, useStates, defaultState}) => {

    const result = states.map((states, info) => {
        return (
            <Item 
            key={info} 
            name={states.name} 
            priceNew={states.priceNew} 
            priceOld={states.priceOld} 
            img={states.img} 
            states={states} useStates={useStates}
            defaultState={defaultState}/>
        )
    })

    return (
        <div className={style.cart}>

                <Button states={states}/>

            <div className={style.cart__info}>
                <div className={style.cart__list}>
                    {result}
                </div>

                <div className={style.cart__buy}>
                    <Buy states={states}/>
                </div>
            </div>
        </div>
    );
};

export default Cart;