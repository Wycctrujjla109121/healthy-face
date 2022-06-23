import React from 'react'
import { NavLink } from 'react-router-dom'

//  STYLES
import style from './button.module.scss'

const Button = ({ states }) => {
  const length = () => states.reduce((prev, current) => parseInt(current.count) + parseInt(prev), 0)

  return (
    <div className={length() > 0 ? style.button__hidden : style.button}>
      <p className={style.button__text}>В корзине пока ничего нет</p>
      <NavLink to="/" className={style.button__link}>
        На главную
      </NavLink>
    </div>
  )
}

export default Button
