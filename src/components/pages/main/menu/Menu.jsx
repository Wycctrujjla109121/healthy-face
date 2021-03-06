import React from 'react'

//  COMPONENTS
import Logo from './logo/Logo.jsx'
import Link from './link/Link.jsx'
import Cart from './cart/Cart.jsx'
import Phone from './phone/Phone.jsx'
import Burger from './burger/Burger.jsx'

//  STYLE
import style from './menu.module.scss'

const list = ({ states }) => {
  return (
    <div className={style.list}>
      <Logo />

      <Link />

      <div className={style.list__cart}>
        <Cart states={states} />

        <Phone />
      </div>

      <Burger />
    </div>
  )
}

export default list
