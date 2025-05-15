import React from 'react';


const Card = ({ children, className = "" }) => {
  return (
    <div>
      <div className={`rounded-2xl shadow-md ${className}`}>
      {children}
    </div>
    </div>
  )
}

export default Card
