import React from 'react'

//  COMPONENTS
import Item from './item/Item.jsx'
import Buy from './buy/Buy.jsx'
import Button from './button/Button.jsx'
//  STYLE
import style from './cart.module.scss'

const Cart = ({ states, useStates }) => {
  const result = states.map((state, id) => {
    if (state.count === 0) {
      return
    }
    return (
      <Item
        key={id}
        name={state.name}
        priceNew={state.priceNew}
        priceOld={state.priceOld}
        img={state.img}
        states={state}
        statesMain={states}
        useStates={useStates}
        count={state.count}
        id={id}
      />
    )
  })

  return (
    <div className={style.cart}>
      {/* 111111111 */}
      <Button states={states} />

      <div className={style.cart__info}>
        <div className={style.cart__list}>{result}</div>

        <div className={style.cart__buy}>
          <Buy states={states} />
        </div>
      </div>
    </div>
  )
}

export default Cart
