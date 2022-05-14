import React from 'react';

//  IMG
// import img from './svg/ourProducts__img.svg'
//  COMPONENTS
import Text from './text/Text.jsx'
import Button from './button/button/Button';
import Button_500 from './button/button-500/Button_500';
//  STYLES
import style from './item.module.scss'

const Item = ({name, priceNew, priceOld, img}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.wrapper__item}>
                <img className={style.wrapper__img} src={img} alt="Картинка"
                style={
                    {
                        backgroundPosition:'center'
                    }
                }/>

                <div className={style.wrapper__list}>
                    <Text name={name} priceNew={priceNew} priceOld={priceOld}/>

                    <Button />

                    <button className={style.wrapper__delete}>Удалить</button>
                </div>

            </div>
            <div className={style.wrapper__block}>
                <Button_500 />
                <button className={style.wrapper__delete_500}>Удалить</button>
            </div>
        </div>
    );
};

export default Item;