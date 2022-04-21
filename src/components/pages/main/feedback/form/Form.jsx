import React, { useState } from 'react';

//  COMPONENTS
import Input from './input/Input.jsx'
import Agreement from './agreement/Agreement.jsx'
import Submit from './sumbit/Submit.jsx';
//  STYLES
import style from './form.module.scss'

const Form = () => {
    const [submit, setSubmit] = useState(false)


    const Email = React.createRef()
    const Text = React.createRef()
    const Checkbox = React.createRef()

    function send() {
        const email = Email.current.value
        const text = Text.current.value
        const checkbox = Checkbox.current.checked

        if (email != '' && text != '' && checkbox == true) {
            setSubmit(true)
        }
        else {
            setSubmit(false)
        }
    }

    return (
        <form className={style.form} action="#">
            <Input Email={Email} Text={Text} />

            <Agreement Checkbox={Checkbox} />

            <Submit send={send} submit={submit} setSubmit={setSubmit} />
        </form>
    );
};

export default Form;