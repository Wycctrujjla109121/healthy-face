import React from 'react'

//  STYLES
import style from './productCard.module.scss'

const ProductCard = ({ states, useStates }) => {
  function AddToCard(id) {
    states[id].count = states[id].count + 1

    useStates([...states])
  }

  return (
    <div className={style.productCard}>
      <>
        {states.map((item, id) => (
          <div className={style.productItem}>
            <div className={style.info}>
              <h2 className={style.info__title}>{item.name}</h2>
              <img className={style.info__img} src={item.img} alt="" />
            </div>
            <div className={style.desc}>
              <h2 className={style.desc__title}>Описание</h2>
              <p className={style.desc__text}>
                {item.name} устраняет зуд и его симптомы за 60 секунд. Эффективность средства длится на протяжении шести часов. У него текстура легкой эмульсии
                и удобный спрей-распылитель, с помощью которого его можно наносить даже на самые труднодоступные места. Помогает справляться с экземой.
              </p>
              <p className={style.desc__price}>
                Цена: {item.priceNew} <span className={style.desc__priceOld}>{item.priceOld} р</span>
              </p>
              <button
                className={style.desc__button}
                onClick={() => {
                  AddToCard(id)
                }}
              >
                Купить
              </button>
            </div>
          </div>
        ))}
      </>
    </div>
  )
}

export default ProductCard
