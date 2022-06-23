import React from 'react'

//  COMPONENTS
import Form from './form/Form'
import Product from './product/Product'
//  STYLES
import style from './order.module.scss'

const Order = ({ states }) => {
  return (
    <div className={style.order}>
      <h1 className={style.order__header}>Оформление заказа</h1>
      <div className={style.order__info}>
        <Form states={states} />

        <Product states={states} />
      </div>
    </div>
  )
}

export default Order
