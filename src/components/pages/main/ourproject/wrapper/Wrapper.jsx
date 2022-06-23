import React, { useState } from 'react'

//  Btn IMG
import btnLeft from './svg/btnLeft.svg'
import btnRight from './svg/btnRight.svg'

//  COMPONENTS
import Product from './product/Product.jsx'
//  STYLES
import style from './wrapper.module.scss'

const Wrapper = ({ states, useStates }) => {
  const resultProduct = states.map((product, id) => {
    return (
      <Product
        priceNew={product.priceNew}
        priceOld={product.priceOld}
        name={product.name}
        img={product.img}
        key={id}
        states={states}
        useStates={useStates}
        count={product.count}
        id={id}
      />
    )
  })

  return (
    <div className={style.wrapper}>
      <button className={style.wrapper__button}>
        <img className={style.wrapper__img} src={btnLeft} alt="" />
      </button>
      <div className={style.wrapper__list}>{resultProduct}</div>
      <button className={style.wrapper__button}>
        <img className={style.wrapper__img} src={btnRight} alt="" />
      </button>
    </div>
  )
}

export default Wrapper
