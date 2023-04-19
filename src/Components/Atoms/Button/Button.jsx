import React from 'react'
import './Button.scss'

const Button = (props) => {
    const {buttonClass,onButtonClick,buttonText} = props;
  return (
    <button className={buttonClass} onClick={onButtonClick}>
        {buttonText}
    </button>
  )
}

export default Button
