import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {loadData} from '../data/ActionCreator';
import {DataTypes} from '../data/Types';

import {Order} from './Order';

const mapStateToProps = (dataStore) => ({
    ...dataStore
})

const mapDispatchToProps = {
    loadData
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
              <Redirect to="/order/items" />
          </Switch>
        } 
        componentDidMount() {
            this.props.loadData(DataTypes.CATEGORIES);
            this.props.loadData(DataTypes.ITEMS);
        }
    }
)