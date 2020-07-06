import React, {Component} from "react";

import {CategoryNavigation} from "./CategoryNavigation";
import {Menu} from './Menu';
import {CartSummary} from "./CartSummary";
import {ItemPageConnector} from './ItemPageConnector';
import {PaginationControls} from "../PaginationControls";

const ItemPages = ItemPageConnector(PaginationControls);

export class Order extends Component {

    handleAddToCart = (...args) => {
        this.props.addToCart(...args);
        this.props.history.push("/order/cart");
    }

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
                    <ItemPages />
                    <Menu items={ this.props.items} addToCart={ this.handleAddToCart } />
                </div>
            </div>
        </div>
    }
}
