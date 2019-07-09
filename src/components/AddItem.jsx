import React from 'react'

class AddItem extends React.Component {

  state = {}

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.product && this.state.quantity) {
      let item = {
        product: this.props.products[this.state.product],
        quantity: this.state.quantity
      }
      console.log(JSON.stringify(this.state.product));
      this.props.formSubmit(item);
    }
    
  }

  render () {
    const productSelectList = [<option key={0} selected disabled>Select a product</option>].concat(this.props.products.map((product, index) => <option key={product.id} value={index}>{product.name}</option>))
    return (
      <form className="container" onSubmit={this.onSubmit}>
        <label htmlFor="quantity">Quantity</label> <br/>
        <input className="form-control" type="text" name="quantity" id="quantity" onChange={this.onChange} /> <br/>
        <label htmlFor="product">Products</label> <br/>
        <select className="custom-select" name="product" id="product" onChange={this.onChange}>
          {productSelectList}
        </select> <br/>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    )
  }
}

export default AddItem;