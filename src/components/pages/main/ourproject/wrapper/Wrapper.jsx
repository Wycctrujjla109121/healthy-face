import React from 'react';

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

const wrapper = () => {
    return (
        <div className={style.wrapper}>
                <button className={style.wrapper__button}>
                    <img className={style.wrapper__img} src={btnLeft} alt="" />
                </button>
                <div className={style.wrapper__list}>
                    <Product priceNew = '1499 р.' priceOld = '2199 р.' name = 'Phyther' img={img0} />
                    <Product priceNew = '999 р.' priceOld = '1299 р.' name = 'Derma' img={img1} />
                    <Product priceNew = '1199 р.' priceOld = '1599 р.' name = 'Eco-phyther' img={img2}/>
                    <Product priceNew = '1299 р.' priceOld = '1599 р.' name = 'Farma' img={img3}/>
                    <Product priceNew = '799 р.' priceOld = '1199 р.' name = 'Consular' img={img4}/>
                </div>
                <button className={style.wrapper__button}>
                    <img className={style.wrapper__img} src={btnRight} alt="" />
                </button>
            </div>
    );
};

export default wrapper;