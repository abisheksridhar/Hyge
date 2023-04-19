import React from 'react'
import './Label.scss'

const Label = (props) => {
    const {styleClass,onLabelClick,labelText} = props;
  return (
    <label className={styleClass} onClick={onLabelClick}>
        {labelText}
    </label>
  )
}

export default Label
