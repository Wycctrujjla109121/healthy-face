import React from 'react';

//  COMPONENTS
import Item from './item/Item.jsx'
//  STYLES
import style from './list.module.scss'
const List = () => {
    return (
        <div className={style.list}>
                <Item number = '1' desc = 'Нанесите крем на нужную область' slogan = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent'/>
                <Item number = '2' desc = 'Нанесите крем на нужную область' slogan = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent'/>
                <Item number = '3' desc = 'Нанесите крем на нужную область' slogan = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent'/>
                <Item number = '4' desc = 'Нанесите крем на нужную область' slogan = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent'/>
            </div>
    );
};

export default List;