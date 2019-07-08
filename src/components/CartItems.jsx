import React from 'react';
import CartItem from './CartItem';

const CartItems = ({ cartItemsList }) => {
  let cartList = cartItemsList.map(cartItem => <CartItem key={cartItem.id} product={cartItem.product.name} price={cartItem.product.priceInCents} quantity={cartItem.quantity} />)
  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        { cartList }
      </div>
    </div>

  )
}

export default CartItems