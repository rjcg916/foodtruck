import {createStore} from "redux";
import {DataReducer} from './DataReducer';
import {CartReducer} from './CartReducer';
import {CommonReducer} from './CommonReducer';

export const FoodTruckDataStore = createStore(CommonReducer(DataReducer, CartReducer));
