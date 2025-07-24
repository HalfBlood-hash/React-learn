
import "./Input.css"


import React from 'react'

export default function Input({
    type = "",
    placeholder = '',
    value,
    onChange,
    
    className = '',
    ...rest
 }) {
    
    const combinedClassName = `custom-input ${className}`;
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="custom-input"
            {...rest}
        />
    )
}
