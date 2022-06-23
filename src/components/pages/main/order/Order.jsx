import React from 'react'

// COMPONENTS
import Item from './item/Item.jsx'
//  STYLES
import style from './order.module.scss'

const Order = ({ states, useStates }) => {
  const resultProduct = states.map((current, id) => {
    return (
      <Item
        key={id}
        img={current.img}
        name={current.name}
        priceNew={current.priceNew}
        priceOld={current.priceOld}
        count={current.count}
        states={states}
        useStates={useStates}
        id={id}
      />
    )
  })

  return (
    <div className={style.order}>
      <h1 className={style.order__header}>хотите заказать?</h1>
      <div className={style.order__list}>{resultProduct}</div>
    </div>
  )
}

export default Order
