import React, {Component} from "react";

import {CategoryNavigation} from "./CategoryNavigation";
import {Menu} from './Menu';
import {CartSummary} from "./CartSummary";

export class Order extends Component {

    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">FOOD TRUCK</div>
                    <CartSummary {...this.props} />
                </div>
            </div>
            <div className="row">
                <div className="col-3 p-2">
                    <CategoryNavigation baseUrl="/order/items"
                                        categories={this.props.categories} />
                </div>
                <div className="col-9 p-2">
                    <Menu items={ this.props.items} addToCart={ this.props.addToCart } />
                </div>
            </div>
        </div>
    }
}
