import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadData, placeOrder } from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Order } from "./Order";
import {
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
} from "../data/CartActionCreators";
import { CartDetails } from "./CartDetails";
import { DataGetter } from "../data/DataGetter";
import { Checkout } from "./Checkout";
import { Thanks } from "./Thanks";

const mapStateToProps = (dataStore) => ({
  ...dataStore,
});

const mapDispatchToProps = {
  loadData,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
  placeOrder,
};

/* const filterItems = ( items = [], category) =>
(!category || category === "All") ? items : items.filter(i => i.category.toLowerCase() === category.toLowerCase());
 */

export const OrderConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {
    render() {
      return (
        <Switch>
          <Redirect
            from="/order/items/:category"
            to="/order/items/:category/1"
            exact={true}
          />
          <Route
            path={"/order/items/:category/:page"}
            render={(routeProps) => (
              <DataGetter {...this.props} {...routeProps}>
                <Order {...this.props} {...routeProps} />
              </DataGetter>
            )}
          />
          <Route
            path="/order/cart"
            render={(routeProps) => (
              <CartDetails {...this.props} {...routeProps} />
            )}
          />
          <Route
            path="/order/checkout"
            render={(routeProps) => (
              <Checkout {...this.props} {...routeProps} />
            )}
          />
          <Route
            path="/order/thanks"
            render={(routeProps) => <Thanks {...this.props} {...routeProps} />}
          />
          <Redirect to="/order/items/all/1" />
        </Switch>
      );
    }
    componentDidMount() {
      this.props.loadData(DataTypes.CATEGORIES);
      // this.props.loadData(DataTypes.ITEMS);
    }
  }
);
