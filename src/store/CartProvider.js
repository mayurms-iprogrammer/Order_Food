import { useReducer } from 'react';
import cartConetxt from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0,

};

const cartReducer = (state, action) => {
    return defaultCartState;
}
const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const addItemfromCartHandler = id => {

    }
    const removeItemfromCartHandler = id => {

    }
    const cartContext = {
        item: [],
        total: 0,
        addItem: addItemfromCartHandler,
        removeItem: removeItemfromCartHandler,

    }
    return <cartConetxt.Provider value={cartContext}>
        {props.children}
    </cartConetxt.Provider>
}
export default CartProvider;