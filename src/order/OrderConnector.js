import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as OrderActions from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Order } from "./Order";
import * as CartActions from "../data/CartActionCreators";
import { CartDetails } from "./CartDetails";
import { DataGetter } from "../data/DataGetter";
import { Checkout } from "./Checkout";
import { Thanks } from "./Thanks";

/* const mapStateToProps = (dataStore) => ({
  ...dataStore,
}); */

const mapDispatchToProps = {
  ...OrderActions,
  ...CartActions,
};

/* const filterItems = ( items = [], category) =>
(!category || category === "All") ? items : items.filter(i => i.category.toLowerCase() === category.toLowerCase());
 */

export const OrderConnector = connect(
  ds => ds,
  mapDispatchToProps
)(
  class extends Component {
    selectComponent = (routeProps) => {
      
      const wrap = (Component, Content) => 
        <Component {...this.props} {...routeProps}>
          {Content && wrap(Content)}
        </Component>
      
      switch (routeProps.match.params.section) {
        case "items":
          return wrap(DataGetter, Order);
        case "cart":
          return wrap(CartDetails);
        case "checkout":
          return wrap(Checkout);
        case "thanks":
          return wrap(Thanks);
        default:
          return <Redirect to="/order/items/all/1" />;
      }
    };

    render() {
      return (
        <Switch>
          <Redirect
            from="/order/items/:category"
            to="/order/items/:category/1"
            exact={true}
          />
          <Route
            path={"/order/:section?/:category?/:page?"}
            render={routeProps => this.selectComponent(routeProps)}
          />
        </Switch>
      );
    }

    componentDidMount = () => this.props.loadData(DataTypes.CATEGORIES);
  }
);
