import {createStore} from "redux";
import {DataReducer} from './DataReducer';

export const FoodTruckDataStore = createStore(DataReducer);
