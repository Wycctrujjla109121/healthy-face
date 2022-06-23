import React from 'react'

//  STYLES
import style from './cart.module.scss'
import { NavLink } from 'react-router-dom'

const Cart = ({ states }) => {
  const length = () => states.reduce((prev, current) => parseInt(current.count) + parseInt(prev), 0)

  return (
    <NavLink to="/cart" className={style.cart}>
      <h2 className={style.cart__header}> | {length()} |</h2>
    </NavLink>
  )
}

export default Cart
