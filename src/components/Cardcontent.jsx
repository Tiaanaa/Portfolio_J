import React from 'react'

const Cardcontent = ({ children, className = "" }) => {
  return (
    <div>
      <div className={`p-6 ${className}`}>
      {children}
    </div>
    </div>
  )
}

export default Cardcontent
