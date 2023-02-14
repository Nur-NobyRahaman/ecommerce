const FilterReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_FILTER_PRODUCT':
            let priceArr = action.payload.map((curElm) => curElm.price)
            let maxPrice = Math.max(...priceArr)
            return {
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload],
                filters: {
                    ...state.filters,
                    maxPrice: maxPrice,
                    price: maxPrice
                }
            }
        case 'SET_GRId_VIEW':
            return {
                ...state,
                gridView: true
            }
        case 'SET_LIST_VIEW':
            return {
                ...state,
                gridView: false
            }
        case 'GET_SORT_VALUE':

            return {
                ...state,
                sortingValue: action.data
            }
        case 'SORTING_PRODUCTS':
            let newStoreData;
            const { filterProducts } = state
            let tempStoreProduct = [...filterProducts]


            const sortingProducts = (a, b) => {
                switch (state.sortingValue) {
                    case "a-z":
                        return a.name.localeCompare(b.name)
                    case "z-a":
                        return b.name.localeCompare(a.name)
                    case "lowest":
                        return a.price - b.price
                    default: return b.price - a.price
                }
            }

            newStoreData = tempStoreProduct.sort(sortingProducts)


            return {
                ...state,
                filterProducts: newStoreData
            }
        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }

        case "FILTER_PRODUCTS":
            let { allProducts } = state
            let tempFilterProduct = [...allProducts]
            const { text, category, company, color, price } = state.filters


            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElm) => {
                    return curElm?.name.toLowerCase().includes(text)
                })
            }

            if (category !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElm) => {
                    return curElm?.category.toLowerCase() === category
                })
            }

            if (company !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElm) => {
                    return curElm?.company.toLowerCase() === company.toLowerCase()
                })
            }
            if (color !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElm) => {
                    return curElm.colors.includes(color)
                })
            }
            if (price) {
                tempFilterProduct = tempFilterProduct.filter((curElm) => {
                    return curElm.price <= price
                })
            }
            return {
                ...state,
                filterProducts: tempFilterProduct
            }
        case 'CLEAR_FILTERS':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: 'all',
                    company: 'all',
                    color: 'all',
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                    minPrice: 0

                }
            }

        default:
            return state
    }
};

export default FilterReducer;