import React from 'react'

const Layout = ({children, title}) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  )
}

export { Layout }