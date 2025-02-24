import React from 'react'

const Container = ({className, children}) => {
  return (
    <div className={`md:max-w-7xl max-w-3xl mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container