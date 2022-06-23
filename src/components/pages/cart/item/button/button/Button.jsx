import React from 'react'

//  STYLES
import style from './button.module.scss'
const Button = ({ states, useStates, count, statesMain, id }) => {
  function Decrement() {
    statesMain[id].count = statesMain[id].count - 1

    useStates([...statesMain])
  }

  function Increment() {
    statesMain[id].count = statesMain[id].count + 1

    useStates([...statesMain])
  }

  return (
    <div className={style.button}>
      <button className={style.button__remove} onClick={() => Decrement()}>
        <svg className={style.button__svg} width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line className={style.button__remove__svg} y1="1" x2="15" y2="1" stroke="black" />
        </svg>
      </button>
      <p className={style.button__number}>{count ? count : '0'}</p>
      <button className={style.button__add} onClick={() => Increment()}>
        <svg className="svg" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line className={style.button__add__svg} x1="7.5" y1="-2.18557e-08" x2="7.5" y2="15" stroke="black" />
          <line className={style.button__add__svg} y1="7.5" x2="15" y2="7.5" stroke="black" />
        </svg>
      </button>
    </div>
  )
}

export default Button
