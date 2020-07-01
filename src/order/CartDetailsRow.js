import React, { Component } from "react";

export class CartDetailsRow extends Component {

  handleChange = (item, event) => {
    this.props.updateQuantity(item, event.target.value);
  };

  render() {
    if (!this.props.cart || this.props.cart.length === 0) {
      return (
        <tr>
          <td colSpan="9">Your cart is empty</td>
        </tr>
      );
    } else {
      return (
        <React.Fragment>
          {this.props.cart.map((i) => (
            <tr key={i.item.id}>
              <td>
                <input
                  type="number"
                  value={i.quantity}
                  onChange={(ev) => this.handleChange(i.item, ev)}
                />
              </td>
              <td>{i.item.name}</td>
              <td>{i.item.price.toFixed(2)}</td>
              <td> {(i.quantity * i.item.price).toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeFromCart(i.item)} >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <th colSpan="3" className="text-right">
              Total
            </th>
            <th colSpan="2"> {this.props.cartPrice.toFixed(2)}</th>
          </tr>
        </React.Fragment>
      );
    }
  }
}
