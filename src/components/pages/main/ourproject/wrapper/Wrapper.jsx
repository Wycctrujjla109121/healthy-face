import React, { useState } from 'react';

//  Btn IMG
import btnLeft from './svg/btnLeft.svg'
import btnRight from './svg/btnRight.svg'
//  product img
import img0 from './product__svg/product_1.png'
import img1 from './product__svg/product_2.png'
import img2 from './product__svg/product_3.png'
//  COMPONENTS
import Product from './product/Product.jsx'
//  STYLES
import style from './wrapper.module.scss'

const Wrapper = ({states, useStates, defaultState}) => {

    const [product, setProduct] = useState([
        {
            priceNew: '1499 р.',
            priceOld: '2199 р.',
            name: 'Phyther',
            img: `${img0}`
        },
        {
            priceNew: '999 р.',
            priceOld: '1299 р.',
            name: 'Derma',
            img: `${img1}`
        },
        {
            priceNew: '1199 р.',
            priceOld: '1599 р.',
            name: 'Eco-phyther',
            img: `${img2}`
        }
    ])

    const resultProduct = Array.from(product.map((product, text) => {
        return <Product 
        priceNew={product.priceNew} 
        priceOld={product.priceOld} 
        name={product.name} 
        img={product.img} 
        key={text} 
        states={states} useStates={useStates} defaultState={defaultState}/>
    }))

    return (
        <div className={style.wrapper}>
            <button className={style.wrapper__button}>
                <img className={style.wrapper__img} src={btnLeft} alt="" />
            </button>
            <div className={style.wrapper__list}>

                {resultProduct}

            </div>
            <button className={style.wrapper__button}>
                <img className={style.wrapper__img} src={btnRight} alt=""/>
            </button>
        </div>
    );
};

export default Wrapper;