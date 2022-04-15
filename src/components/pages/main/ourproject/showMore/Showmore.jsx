import React from 'react';

//  STYLES
import style from './showmore.module.scss'

const showmore = () => {
    return (
        <div className={style.show__more}>
            <button className={style.show__more__btn}>Показать больше</button>
        </div>
    );
};

export default showmore;