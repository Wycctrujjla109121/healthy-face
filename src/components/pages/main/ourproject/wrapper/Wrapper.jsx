import React from 'react';

//  Btn IMG
import btnLeft from './svg/btnLeft.svg'
import btnRight from './svg/btnRight.svg'
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
                    <Product priceNew = '99$' priceOld = '129$' name = 'Phyther' />
                    <Product priceNew = '99$' priceOld = '129$' name = 'Phyther' />
                    <Product priceNew = '99$' priceOld = '129$' name = 'Phyther' />
                    <Product priceNew = '99$' priceOld = '129$' name = 'Phyther' />
                    <Product priceNew = '99$' priceOld = '129$' name = 'Phyther' />
                </div>
                <button className={style.wrapper__button}>
                    <img className={style.wrapper__img} src={btnRight} alt="" />
                </button>
            </div>
    );
};

export default wrapper;