import React from 'react'

//  COMPONENTS
import Item from './item/Item'
//  STYLES
import style from './product.module.scss'

const Product = ({ states, useStates }) => {
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
    <div className={style.product}>
      <h3 className={style.product__title}>Товары:</h3>
      <div className={style.product__list}>{result}</div>
    </div>
  )
}

export default Product
