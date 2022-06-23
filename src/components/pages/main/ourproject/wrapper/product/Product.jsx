import React from 'react'

//  STYLES
import style from './product.module.scss'

const product = ({ states, name, priceNew, priceOld, img, useStates, id }) => {
  function AddToCard(id) {
    states[id].count = states[id].count + 1

    useStates([...states])
  }

  return (
    <div
      className={style.product}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className={style.product__info}>
        <div className={style.product__price}>
          <h3 className={style.product__priceNew}>{priceNew}</h3>
          <h3 className={style.product__priceOld}>{priceOld}</h3>
        </div>
        <h3 className={style.product__text}>{name}</h3>
      </div>
      <button
        className={style.product__button}
        onClick={() => {
          AddToCard(id)
        }}
      >
        Купить
      </button>
    </div>
  )
}

export default product
