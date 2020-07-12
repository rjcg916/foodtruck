import React, { Component } from "react";
import { ValidatedForm } from "../forms/ValidatedForm";

export class Checkout extends Component {
  constructor(props) {
    super(props);
    this.defaultAttrs = { type: "text", required: true };
    this.formModel = [
      { label: "Name" },
      { label: "Email", attrs: { type: "email" } },
      { label: "Phone" },
    ];
  }

  handleSubmit = (formData) => {
    if (this.props.cart === undefined) {
      this.props.history.push("/order/cart");
    } else {
      const order = {
        ...formData,
        items: this.props.cart.map((item) => ({
          quantity: item.quantity,
          item_id: item.item.id,
        })),
      };
      this.props.placeOrder(order);
      this.props.clearCart();
      this.props.history.push("/order/thanks");
    }
  };

  handleCancel = () => {
    this.props.history.push("/order/cart");
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col bg-dark text-white">
            <div className="navbar-brand">FOOD TRUCK</div>
          </div>
        </div>
        <div className="row">
          <div className="col m-2">
            <ValidatedForm
              formModel={this.formModel}
              defaultAttrs={this.defaultAttrs}
              submitCallback={this.handleSubmit}
              cancelCallback={this.handleCancel}
              canSubmit={this.props.cart !== undefined}
              submitText="Place Order"
              cancelText="Return to Cart"
            />
          </div>
        </div>
      </div>
    );
  }
}
