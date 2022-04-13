import React from 'react';

//  STYLES
import style from './agreement.module.scss'

const agreement = () => {
    return (
        <div className={style.agreement}>
            <input className={style.agreement__checkbox} type="checkbox" id='agreementCheckbox' />
            <label className={style.agreement__text} for='agreementCheckbox'>Я даю свое согласие на хранение и обработку персональных данных</label>
        </div>
    );
};

export default agreement;