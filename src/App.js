import React, {Component} from 'react';
import {FoodTruckDataStore} from './data/DataStore';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {OrderConnector} from './order/OrderConnector';


export default class App extends Component {
  render() {
    return <Provider store={ FoodTruckDataStore}>
      <Router>
        <Switch>
          <Route path="/order" component={ OrderConnector} />
          <Redirect to="/order" /> 
        </Switch>
      </Router>

    </Provider>
  }

}
