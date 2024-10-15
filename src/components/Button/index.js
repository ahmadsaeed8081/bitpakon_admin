import React from 'react'

const  Button = ({
    type,
    label,
    disabled,
    className,
    Icons,
    onClick
}) => {
  return (
    <button onClick={onClick} type={type} className={`  flex justify-center gap-1   py-2.5 text-center   rounded-lg  font-medium ${className}`} disabled={disabled}>  {Icons} {label}</button>
  )
}

export default Button