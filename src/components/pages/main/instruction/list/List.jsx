import React from 'react';

//  IMG
import img0 from './item/svg/girl1.png'
import img1 from './item/svg/girl2.png'
import img2 from './item/svg/girl3.png'
//  COMPONENTS
import Item from './item/Item.jsx'
//  STYLES
import style from './list.module.scss'
const List = () => {
    return (
        <div className={style.list}>
                <Item number = '1' desc = 'Очистите кожу перед нанесением' slogan = 'Перед применением следует очистить кожу лица, умывший водой ' img={img0}/>
                <Item number = '2' desc = 'Нанесите спрей на кожу' slogan = 'Уберите лишнюю влагу полотенцем или салфетками' img={img1}/>
                <Item number = '3' desc = 'Разотрите по нужной области' slogan = 'Избегая области вокруг глаз, распылите средство на проблемные участки кожи лица. В случае попадания в глаза промыть водой' img={img2}/>
            </div>
    );
};

export default List;