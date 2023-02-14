import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/CartReducer'
const CartContext = createContext()
const getLocalCartData = () => {
    let localCartData = localStorage.getItem("cartValue");
    if (localCartData === []) {
        return []
    }
    else {
        return JSON.parse(localCartData)
    }
}
const initialState = {
    cart: [],
    totalItem: 0,
    totalAmount: 0,
    shippingFee: 50000,
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, color, singleProduct, price, amount, fistImage) => {
        dispatch({ type: 'ADD_TO_CART', payload: { id, color, singleProduct, price, amount, fistImage } })

    }
    const removeItem = (id) => {

        dispatch({ type: 'REMOVE_ITEM', payload: id })
    }
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    const setIncrease = (id) => {
        dispatch({ type: 'SET_INCREASE', payload: id })
    }
    const setDecrease = (id) => {
        dispatch({ type: 'SET_DECREASE', payload: id })
    }

    useEffect(() => {
        // dispatch({ type: 'CART_TOTAL_ITEM' })
        // dispatch({ type: 'CART_TOTAL_PRICE' })
        dispatch({ type: 'CART_TOTAL_PRICE_ITEM' })
    }, [state.cart])
    return <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setIncrease, setDecrease }}>{children}</CartContext.Provider>
}



const useCartContext = () => {
    return useContext(CartContext)
}
export { CartProvider, useCartContext };







