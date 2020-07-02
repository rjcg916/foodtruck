import { createStore, applyMiddleware } from "redux";
import { DataReducer } from "./DataReducer";
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";
import { asyncActions } from "./AsyncMiddleware";

export const FoodTruckDataStore = createStore(
  CommonReducer(DataReducer, CartReducer),
  applyMiddleware(asyncActions)
);
