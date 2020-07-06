import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {loadData} from '../data/ActionCreators';
import {DataTypes} from '../data/Types';

import {Order} from './Order';
import {addToCart, updateCartQuantity, removeFromCart, clearCart} from "../data/CartActionCreators";
import {CartDetails} from "./CartDetails";
import { DataGetter} from "../data/DataGetter";

const mapStateToProps = (dataStore) => ({
    ...dataStore
})

const mapDispatchToProps = {
    loadData, addToCart, updateCartQuantity, removeFromCart, clearCart
}

/* const filterItems = ( items = [], category) =>
(!category || category === "All") ? items : items.filter(i => i.category.toLowerCase() === category.toLowerCase());
 */

export const OrderConnector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        render() {
          return <Switch>
              <Redirect from="/order/items/:category"
                 to="/order/items/:category/1" exact={true} />
              <Route path={"/order/items/:category/:page"}
                render={ (routeProps) =>
                <DataGetter {...this.props} {...routeProps} >
                         <Order {...this.props} {...routeProps} /> 
                 </DataGetter>
                }/>
                 <Route path="/order/cart" render={ (routeProps) => <CartDetails { ...this.props} {... routeProps} />} />
              <Redirect to="/order/items/all/1" />
          </Switch>
        } 
        componentDidMount() {
            this.props.loadData(DataTypes.CATEGORIES);
           // this.props.loadData(DataTypes.ITEMS);
        }
    }
)