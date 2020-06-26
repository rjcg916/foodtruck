import React, {Component} from "react";

export class Menu extends Component {
    render() {
        if (this.props.items == null || this.props.items.length === 0) {
            return <h5 className="p-2">No items</h5>
        } 
        return this.props.items.map( i => 
            <div className="card m-1 p-1 bg-light" key={ i.id}>
                <h4>
                    {i.name}
                    <span className="badge badge-pill badge-primary float-right">
                        ${ i.price.toFixed(2)}
                    </span>
                </h4>
                <div className="card-text bg-white p-1">
                    { i.description}
                </div>
            </div>)
    }
}