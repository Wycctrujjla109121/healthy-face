import React from 'react';

//  COMPONENTS
import List from './list/list.jsx'

//  STYLE
import style from './header.module.scss'

const header = () => {
    return (
        <div className={style.header}>
            <List />
        </div>
    );
};

export default header;