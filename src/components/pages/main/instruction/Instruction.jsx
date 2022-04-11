import React from 'react';

//  COMPONENTS
import List from './list/List.jsx'
//  STYLES
import style from './instruction.module.scss'
const instruction = () => {
    return (
        <div className={style.instruction}>
            <h2 className={style.instruction__header}>Способ Применения</h2>
            <List />
        </div>
    );
};

export default instruction;