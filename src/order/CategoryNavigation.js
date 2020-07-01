import React, {Component} from "react";
//import {Link} from "react-router-dom";
import {ToggleLink} from '../ToggleLink';

export class CategoryNavigation extends Component {

    render() {
        return <React.Fragment>
             <ToggleLink to={ this.props.baseUrl} exact={true}>All</ToggleLink>
             { this.props.categories && this.props.categories.map( c => 
                <ToggleLink key={ c}
                      to={ `${ this.props.baseUrl}/${c.toLowerCase()}`}>
                          {c}
                      </ToggleLink>)}
            </React.Fragment>
    }
}