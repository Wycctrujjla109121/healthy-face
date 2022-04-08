import React from 'react';

//  COMPONENTS
import Product from './product/product.jsx'
//  STYLES
import style from './ourproject.module.scss'

const ourproject = () => {
    return (
        <div className={style.ourproject}>
            <h2 className={style.ourproject__title}>Наши продукты</h2>
            <div className={style.ourproject__wrapper}>
                <button className={style.ourproject__wrapper__btn}>
                    <svg className={style.ourproject__wrapper__btn__img} width="42" height="59" viewBox="0 0 42 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 0.999998C26.1917 0.999998 22.4206 1.73717 18.9022 3.16943C15.3837 4.60169 12.1868 6.70098 9.4939 9.34745C6.801 11.9939 4.66488 15.1357 3.20749 18.5935C1.75011 22.0513 1 25.7573 1 29.5C1 33.2427 1.75011 36.9487 3.20749 40.4065C4.66488 43.8643 6.801 47.0061 9.4939 49.6525C12.1868 52.299 15.3837 54.3983 18.9022 55.8306C22.4206 57.2628 26.1917 58 30 58" stroke="#DA6836" stroke-width="1.2" />
                        <path d="M17.5757 29.5757C17.3414 29.8101 17.3414 30.1899 17.5757 30.4243L21.3941 34.2426C21.6284 34.477 22.0083 34.477 22.2426 34.2426C22.477 34.0083 22.477 33.6284 22.2426 33.3941L18.8485 30L22.2426 26.6059C22.477 26.3716 22.477 25.9917 22.2426 25.7574C22.0083 25.523 21.6284 25.523 21.3941 25.7574L17.5757 29.5757ZM42 29.4L18 29.4V30.6L42 30.6V29.4Z" fill="#DA6836" />
                    </svg>
                </button>
                <div className={style.ourproject__wrapper__list}>
                    <Product priceNew = '99$' priceOld = '129$' name = 'Phyther' img = 'productimg\ourProducts__img__1.svg'/>
                    <Product priceNew = '99$' priceOld = '129$' name = 'Phyther' img = 'productimg\ourProducts__img__1.svg'/>
                    <Product priceNew = '99$' priceOld = '129$' name = 'Phyther' img = 'productimg\ourProducts__img__2.svg'/>
                    <Product priceNew = '99$' priceOld = '129$' name = 'Phyther' img = 'productimg\ourProducts__img__3.svg'/>
                    <Product priceNew = '99$' priceOld = '129$' name = 'Phyther' img = 'productimg\ourProducts__img__4.svg'/>
                </div>
                <button className={style.ourproject__wrapper__btn}>
                    <svg className={style.ourproject__wrapper__btn__img} width="42" height="59" viewBox="0 0 42 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 58C15.8083 58 19.5794 57.2628 23.0978 55.8306C26.6163 54.3983 29.8132 52.299 32.5061 49.6525C35.199 47.0061 37.3351 43.8643 38.7925 40.4065C40.2499 36.9487 41 33.2427 41 29.5C41 25.7573 40.2499 22.0513 38.7925 18.5935C37.3351 15.1357 35.199 11.9939 32.5061 9.34746C29.8132 6.70099 26.6163 4.60169 23.0978 3.16943C19.5794 1.73717 15.8083 1 12 1" stroke="#DA6836" stroke-width="1.2" />
                        <path d="M24.4243 30.4243C24.6586 30.1899 24.6586 29.8101 24.4243 29.5757L20.6059 25.7574C20.3716 25.523 19.9917 25.523 19.7574 25.7574C19.523 25.9917 19.523 26.3716 19.7574 26.6059L23.1515 30L19.7574 33.3941C19.523 33.6284 19.523 34.0083 19.7574 34.2426C19.9917 34.477 20.3716 34.477 20.6059 34.2426L24.4243 30.4243ZM0 30.6H24V29.4H0L0 30.6Z" fill="#DA6836" />
                    </svg>
                </button>
            </div>
            <div className={style.ourproject__show__more}>
            <button className={style.ourproject__show__more__btn}>Показать больше</button>
            </div>
        </div>
    );
};

export default ourproject;