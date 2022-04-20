import React from 'react';

//  bg map
import map from './svg/contacts__map.svg'
//  STYLES
import style from './map.module.scss'

const Map = () => {
    return (
        <img className={style.map} src={map} alt="" />
    );
};

export default Map;