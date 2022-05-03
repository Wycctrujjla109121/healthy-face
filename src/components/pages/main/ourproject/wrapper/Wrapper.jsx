import React, { useState } from 'react';

//  Btn IMG
import btnLeft from './svg/btnLeft.svg'
import btnRight from './svg/btnRight.svg'
//  product img
import img0 from './product__svg/ourProduct0.svg'
import img1 from './product__svg/ourProduct1.svg'
import img2 from './product__svg/ourProduct2.svg'
import img3 from './product__svg/ourProduct3.svg'
import img4 from './product__svg/ourProduct4.svg'
//  COMPONENTS
import Product from './product/Product.jsx'
//  STYLES
import style from './wrapper.module.scss'

const Wrapper = () => {

    const [product, setProduct] = useState([
        {
            priceNew: '1499 р.',
            priceOld: '2199 р.',
            name: 'Phyther',
            img: { img0 }
        },
        {
            priceNew: '999 р.',
            priceOld: '1299 р.',
            name: 'Derma',
            img: { img1 }
        },
        {
            priceNew: '1199 р.',
            priceOld: '1599 р.',
            name: 'Eco-phyther',
            img: { img2 }
        },
        {
            priceNew: '1299 р.',
            priceOld: '1599 р.',
            name: 'Farma',
            img: { img3 }
        },
        {
            priceNew: '799 р.',
            priceOld: '1199 р.',
            name: 'Consular',
            img: { img4 }
        }
    ])

    const [offset, setOffset] = useState(0)

    const resultProduct = Array.from(product.map((product, text) => {
        return <Product priceNew={product.priceNew} priceOld={product.priceOld} name={product.name} img={product.img} key={text} offset={offset} />
    }))

    // Переменные для offset
    const maxWidthProduct = 264;


    function handleLeftClick() {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + maxWidthProduct
            console.log(currentOffset)

            return Math.min(newOffset, 0)
        })
    }

    function handleRightCLick() {
        let windowScreen = window.innerWidth;
        let maxWidthList = 0;
        // Максимальная длинна листа 
        if (windowScreen > 1550) {
            maxWidthList = 1320;
        }
        else if (windowScreen < 1550 && windowScreen > 1420) {
            maxWidthList = 1206;
        }
        else{
            maxWidthList = windowScreen - 214
        }

        setOffset((currentOffset) => {
            const newOffset = currentOffset - maxWidthProduct


            const maxOffset = -(maxWidthProduct * (product.length)) + maxWidthList
            console.log('Текущий offset: ' + currentOffset)
            console.log('Максимальная offset: ' + maxOffset)

            return Math.max(newOffset, maxOffset)
        })
    }

    return (
        <div className={style.wrapper}>
            <button className={style.wrapper__button} onClick={handleLeftClick}>
                <img className={style.wrapper__img} src={btnLeft} alt="" />
            </button>
            <div className={style.wrapper__list}>

                {resultProduct}

            </div>
            <button className={style.wrapper__button}>
                <img className={style.wrapper__img} src={btnRight} alt="" onClick={handleRightCLick} />
            </button>
        </div>
    );
};

export default Wrapper;