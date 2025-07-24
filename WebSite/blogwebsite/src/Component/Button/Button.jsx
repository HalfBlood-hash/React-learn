

import React from 'react'
import './Button.css'
export default function Button({ label = 'Click Me',
  onClick = () => {},
  size = 'medium',      
  backgroundColor = '#007bff', 
  className = '',
  ...rest
}) {
  const combinedClassName = `custom-button ${size} ${className}`.trim();
  const buttonStyle = { backgroundColor };
  return (

    <div>
        <button
        onClick={onClick}
        className={combinedClassName}
        style={buttonStyle}
        {...rest}
        >{label}</button>
    </div>
  )
}
