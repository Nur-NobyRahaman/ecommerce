const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let { id, color, singleProduct, price, amount, fistImage } = action.payload;
            let existingProduct = state.cart.find((curElm) => curElm.id === id + color)
            if (existingProduct) {
                let updateProduct = state.cart.map((curElm) => {
                    if (curElm.id === id + color) {
                        let newAmount = curElm.amount + amount;
                        if (newAmount >= curElm.max) {
                            newAmount = curElm.max
                        }

                        return {
                            ...curElm,
                            amount: newAmount
                        }
                    }
                    else {
                        return curElm;
                    }

                })
                return {
                    ...state,
                    cart: updateProduct
                }
            }
            else {
                let cartProduct = {
                    id: id + color,
                    name: singleProduct.name,
                    price,
                    color,
                    amount,
                    image: fistImage,
                    price,
                    max: singleProduct.stock,


                }
                return {
                    ...state,
                    cart: [...state.cart, cartProduct]
                }
            }
        case "REMOVE_ITEM":
            const updatedCart = state.cart.filter((curElm, index) => {
                return curElm.id !== action.payload;
            })
            return {
                ...state,
                cart: updatedCart,
            }
        case "SET_DECREASE":
            let updateDecreaseProduct = state.cart.map((curElm) => {
                if (curElm.id === action.payload) {
                    let decrease = curElm.amount - 1;
                    if (decrease <= 1) {
                        decrease = 1
                    }
                    return {
                        ...curElm,
                        amount: decrease,
                    }
                }
                else {
                    return curElm
                }
            })
            return {
                ...state,
                cart: updateDecreaseProduct
            }
        case "SET_INCREASE":
            let updateProduct = state.cart.map((curElm) => {
                if (curElm.id == action.payload) {
                    let Increase = curElm.amount + 1
                    if (Increase >= curElm.max) {
                        Increase = curElm.max
                    }
                    return {
                        ...curElm, amount: Increase
                    }
                }
                else {
                    return curElm
                }

            })
            return {
                ...state, cart: updateProduct
            }
        case "CART_TOTAL_ITEM":
            let updateItemValue = state.cart.reduce((initialValue, curElm) => {
                let { amount } = curElm
                return initialValue = initialValue + amount
            }, 0)
            return {
                ...state,
                totalItem: updateItemValue
            }

        case "CART_TOTAL_PRICE":
            let updatePriceValue = state.cart.reduce((initialValue, curElm) => {
                let { price, amount } = curElm
                return initialValue = initialValue + (price * amount)
            }, 0)
            return {
                ...state,
                totalAmount: updatePriceValue
            }
        case 'CART_TOTAL_PRICE_ITEM':
            let { totalItem, totalAmount } = state.cart.reduce((initialValue, curElm) => {
                let { amount, price } = curElm
                initialValue.totalItem += amount
                initialValue.totalAmount += (price * amount)
                return initialValue
            }, {
                totalItem: 0, totalAmount: 0
            })
            return {
                ...state,
                totalItem, totalAmount
            }
        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            }

        default:
            return state
    }
    // if (action.type === 'ADD_TO_CART') {
    //     let { id, color, singleProduct, price, amount, fistImage } = action.payload;

    //     let existingProduct = state.cart.find((curElm) => curElm.id === id + color)
    //     if (existingProduct) {
    //         let updateProduct = state.cart.map((curElm) => {
    //             if (curElm.id === id + color) {
    //                 let newAmount = curElm.amount + amount;
    //                 if (newAmount >= curElm.max) {
    //                     newAmount = curElm.max
    //                 }

    //                 return {
    //                     ...curElm,
    //                     amount: newAmount
    //                 }
    //             }
    //             else {
    //                 return curElm;
    //             }

    //         })
    //         return {
    //             ...state,
    //             cart: updateProduct
    //         }
    //     }
    //     else {
    //         let cartProduct = {
    //             id: id + color,
    //             name: singleProduct.name,
    //             price,
    //             color,
    //             amount,
    //             image: fistImage,
    //             price,
    //             max: singleProduct.stock,


    //         }
    //         return {
    //             ...state,
    //             cart: [...state.cart, cartProduct]
    //         }
    //     }
    // }

    // if (action.type === "REMOVE_ITEM") {
    //     const updatedCart = state.cart.filter((curElm, index) => {
    //         return curElm.id !== action.payload;
    //     })
    //     return {
    //         ...state,
    //         cart: updatedCart,
    //     }

    // }


    // if (action.type === "SET_DECREASE") {
    //     let updateProduct = state.cart.map((curElm) => {
    //         if (curElm.id === action.payload) {
    //             let decrease = curElm.amount - 1;
    //             if (decrease <= 1) {
    //                 decrease = 1
    //             }
    //             return {
    //                 ...curElm,
    //                 amount: decrease,
    //             }
    //         }
    //         else {
    //             return curElm
    //         }
    //     })
    //     return {
    //         ...state,
    //         cart: updateProduct
    //     }

    // }

    // if (action.type === "SET_INCREASE") {
    //     let updateProduct = state.cart.map((curElm) => {
    //         if (curElm.id == action.payload) {
    //             let Increase = curElm.amount + 1
    //             if (Increase >= curElm.max) {
    //                 Increase = curElm.max
    //             }
    //             return {
    //                 ...curElm, amount: Increase
    //             }
    //         }
    //         else {
    //             return curElm
    //         }

    //     })
    //     return {
    //         ...state, cart: updateProduct
    //     }
    // }

    // if (action.type === "CART_TOTAL_ITEM") {
    //     let updateItemValue = state.cart.reduce((initialValue, curElm) => {
    //         let { amount } = curElm
    //         return initialValue = initialValue + amount
    //     }, 0)
    //     return {
    //         ...state,
    //         totalItem: updateItemValue
    //     }
    // }

    // if (action.type === "CART_TOTAL_PRICE") {
    //     let updatePriceValue = state.cart.reduce((initialValue, curElm) => {
    //         let { price, amount } = curElm
    //         return initialValue = initialValue + (price * amount)
    //     }, 0)
    //     return {
    //         ...state,
    //         totalAmount: updatePriceValue
    //     }
    // }

    // if (action.type === 'CART_TOTAL_PRICE_ITEM') {
    //     let { totalItem, totalAmount } = state.cart.reduce((initialValue, curElm) => {
    //         let { amount, price } = curElm
    //         initialValue.totalItem += amount
    //         initialValue.totalAmount += (price * amount)
    //         return initialValue
    //     }, {
    //         totalItem: 0, totalAmount: 0
    //     })
    //     return {
    //         ...state,
    //         totalItem, totalAmount
    //     }
    // }

    // if (action.type === "CLEAR_CART") {
    //     return {
    //         ...state,
    //         cart: []
    //     }
    // }
    // return state
};

export default CartReducer;

