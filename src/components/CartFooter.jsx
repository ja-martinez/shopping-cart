import React from 'react'

const CartFooter = ({ copyright }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#a">&copy; {copyright}</a>
    </nav>
  )
}

export default CartFooter