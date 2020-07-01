import React, { Component} from "react";
import {Link} from "react-router-dom";
import { CartDetailsRow } from "./CartDetailsRow";

export class CartDetails extends Component {
    getLinkClasses = () => `btn btn-secondary m-1 ${ this.props.cartItems === 0 ? "disabled" : ""}`

    render() {
        return <div className="m-3">
            <h2 className="text-center">Your Cart</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Items</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">Subtotal</th>
                    </tr>
                    </thead>
                    <tbody>
                        <CartDetailsRow cart={ this.props.cart} 
                                        cartPrice={ this.props.cartPrice}
                                        updateQuantity={ this.props.updateCartQuantity}
                                        removeFromCart={ this.props.removeFromCart}/>
                    </tbody>

            </table>
            <div className="textCenter">
                <Link className="btn btn-primary m-1" to="/order">
                    Continue Your Order
                </Link>
                <Link className={this.getLinkClasses() } to="/order/checkout">
                    Checkout
                    </Link>
            </div>

        </div>
    }
}