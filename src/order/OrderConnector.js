import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {loadData} from '../data/ActionCreator';
import {DataTypes} from '../data/Types';

import {Order} from './Order';
import {addToCart, updateCartQuantity, removeFromCart, clearCart} from "../data/CartActionCreators";
import {CartDetails} from "./CartDetails";

const mapStateToProps = (dataStore) => ({
    ...dataStore
})

const mapDispatchToProps = {
    loadData, addToCart, updateCartQuantity, removeFromCart, clearCart
}

const filterItems = ( items = [], category) =>
(!category || category === "All") ? items : items.filter(i => i.category.toLowerCase() === category.toLowerCase());

export const OrderConnector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        render() {
          return <Switch>
              <Route path="/order/items/:category?"
                render={ (routeProps) =>
                <Order {...this.props} {...routeProps}
                 items={ filterItems(this.props.items, routeProps.match.params.category)} />}/>
                 <Route path="/order/cart" render={ (routeProps) => <CartDetails { ...this.props} {... routeProps} />} />
              <Redirect to="/order/items" />
          </Switch>
        } 
        componentDidMount() {
            this.props.loadData(DataTypes.CATEGORIES);
            this.props.loadData(DataTypes.ITEMS);
        }
    }
)