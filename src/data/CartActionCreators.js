import {ActionTypes} from "./Types";

export const addToCart = (item, quantity) => ( {
    type: ActionTypes.CART_ADD,
    payload: { item,
               quantity : quantity || 1}
})

export const updateCartQuantity = (item, quantity ) => ({
    type: ActionTypes.CART_UPDATE,
    payload: { item, quantity}
})

export const removeFromCart = (item) => ({
    type: ActionTypes.CART_REMOVE,
    payload: item
})

export const clearCart = () => ({
    type: ActionTypes.CART_CLEAR
})