import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContex";
import reducer from '../Reducer/FilterReducer'
const FilterContext = createContext();

const initialState = {
    filterProducts: [],
    allProducts: [],
    isLoading: false,
    gridView: true,
    sortingValue: 'highest',
    filters: {
        text: "",
        category: 'all',
        company: 'all',
        color: 'all',
        maxPrice:0,
        price:0,
        minPrice:0
    }

}

export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext()
    const [state, dispatch] = useReducer(reducer, initialState)

    const setGridView = () => {
        return dispatch({ type: 'SET_GRId_VIEW' })
    }
    const setListView = () => {
        return dispatch({ type: 'SET_LIST_VIEW' })
    }

    const sorting = (event) => {
        const data = event.target.value;
        return dispatch({ type: 'GET_SORT_VALUE', data: data })
    }

    const updateFilterValue = (event) => {
        const name = event.target.name
        const value = event.target.value
        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } })
    }
    const clearFilters = () => {
        return dispatch({ type: 'CLEAR_FILTERS',})
    }

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORTING_PRODUCTS" })

    }, [state.sortingValue, state.filters])

    useEffect(() => {
        dispatch({ type: 'LOAD_FILTER_PRODUCT', payload: products })
    }, [products])
    return <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue,clearFilters }}>{children}</FilterContext.Provider>
}
export const useFilterContext = () => {
    return useContext(FilterContext)
}