import { ActionTypes } from "./Types";

export const CartReducer = (storeData, action) => {
  let newStore = { cart: [], cartItems: 0, cartPrice: 0, ...storeData };
  switch (action.type) {
    case ActionTypes.CART_ADD:
      const i = action.payload.item;
      const q = action.payload.quantity;
      let existing = newStore.cart.find(item => item.item.id === i.id);
      if (existing) {
          existing.quantity += q;
      } else {
          newStore.cart = [...newStore.cart, action.payload];
      }
      newStore.cartItems += q;
      newStore.cartPrice += q * i.price;
      return newStore;

    case ActionTypes.CART_UPDATE:
      newStore.cart = newStore.cart.map((i) => {
        if (i.item.id === action.payload.item.id) {
          const diff = action.payload.quantity - i.quantity;
          newStore.cartItems += diff;
          newStore.cartPrice += diff * i.item.price;
          return action.payload;
        } else {
          return i;
        }
      });
      return newStore;

    case ActionTypes.CART_REMOVE:

    const ir = newStore.cart.find( i => i.item.id === action.payload.id);
    newStore.cartItems -= ir.quantity;
    newStore.cartPrice -= (ir.quantity * ir.item.price);
    newStore.cart = newStore.cart.filter( i => i !== ir);  
    return newStore;

    case ActionTypes.CART_CLEAR:
    return  {...storeData, cart:[], cartItems: 0, cartPrice: 0.0} ;
    default:
      return storeData || {};
  }
};
