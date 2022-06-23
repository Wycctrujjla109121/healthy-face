import React from 'react'

//  STYLES
import style from './item.module.scss'

const item = ({ img, name, states, priceNew, priceOld, useStates, id }) => {
  function AddToCard(id) {
    states[id].count = states[id].count + 1

    useStates([...states])
  }

  return (
    <div className={style.item}>
      <img className={style.item__img} src={img} alt="" />
      <div className={style.item__info}>
        <h2 className={style.item__text}>{name}</h2>
        <div className={style.item__price}>
          <p className={style.item__priceOld}>{priceOld}</p>
          <p className={style.item__priceNew}>{priceNew}</p>
        </div>
      </div>
      <button className={style.item__btn} onClick={() => AddToCard(id)}>
        Купить
      </button>
    </div>
  )
}

export default item
