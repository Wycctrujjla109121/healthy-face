import React from 'react';

//  COMPONENTS
import Input from './input/Input.jsx'
import Agreement from './agreement/Agreement.jsx'
import Submit from './sumbit/Submit.jsx';
//  STYLES
import style from './form.module.scss'

const form = () => {
    return (
        <form className={style.form} action="#">
            <Input />

            <Agreement />

            <Submit />
        </form>
    );
};

export default form;