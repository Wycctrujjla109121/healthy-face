import React from 'react'

//  STYLES
import style from './agreement.module.scss'

// DOC
import doc from '../../../../../../assets/doc/treaty.rtf'

const agreement = (props) => {
  return (
    <div className={style.agreement}>
      <input ref={props.Checkbox} className={style.agreement__checkbox} type="checkbox" id="agreementCheckbox" />
      <label className={style.agreement__text} htmlFor="agreementCheckbox">
        <span className={style.agreement__download}>
          Я даю свое
          <a download href={doc} className={style.agreement__link}>
            &nbsp;согласие&nbsp;
          </a>
          на хранение и обработку персональных данных
        </span>
      </label>
    </div>
  )
}

export default agreement
