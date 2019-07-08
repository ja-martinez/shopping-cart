import React from 'react';
import './App.css';
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
import CartItems from './components/CartItems';
import AddItem from './components/AddItem';

class App extends React.Component {

  state = {
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],

    cartItems: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]
  }

  addItem = (item) => {
    let found = false;
    for (let i=0; i<this.state.cartItems.length; i++) {
      if (this.state.cartItems[i].product.id === item.product.id) {
        found = true;
      }
    }

    if (found) {
      this.setState(prevState => {
        return {
          cartItems: prevState.cartItems.map(cartItem => {
            if (cartItem.product.id === item.product.id) {
              return {
                ...cartItem,
                quantity: parseInt(cartItem.quantity) + parseInt(item.quantity)
              }
            } else {
              return cartItem
            }
          })
        }
      })
    } else {
      this.setState(prevState => {
        return {
          cartItems: prevState.cartItems.concat({id: prevState.cartItems.length + 1, ...item})
        }
      })
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <CartHeader />
        </header>
        <main>
          <CartItems cartItemsList={this.state.cartItems}/>
          <AddItem products={this.state.products} formSubmit={this.addItem} />
        </main>
        <footer>
          <CartFooter copyright="2016"/>
        </footer>
      </div>
    );
  }
}

export default App;
