import React, {Component} from "react";
import {Link} from "react-router-dom";

export class Thanks extends Component {
    render() {
        return <div>
            <div className="col bg-dark text-white">
                <div className="navbar-brand">FOOD TRUCK</div>
            </div>
            <div className="m-2 text-center">
                <h2>Thanks!</h2>
                <p> Thank you for placing your order</p>
                <p> Your order is #{this.props.order ? this.props.order.id : 0}</p>
                <p> We'll have your order ready as soon as possible.</p>
                <Link to="/order" className="btn btn-primary">
                    Return to Menu
                </Link>
            </div>
        </div>
    }
}