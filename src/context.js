import { createContext, useReducer, useEffect } from 'react';
import {reducer} from './reducer';

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order:JSON.parse(localStorage.getItem('basket')) || [],
    isBasketShow: false,
    alertName: '',
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(value.order))}, [value.order])

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }

    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item})
    }

    value.incQuantity = (itemId) => {
        dispatch({type: 'INCREMENT_QUANTITY', payload: {id:itemId}})
    }

    value.decQuantity = (itemId) => {
        dispatch({type: 'DECREMENT_QUANTITY', payload: {id:itemId}})
    }

    value.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id:itemId}})
    }

    value.handleBasketShow = () => {
        dispatch({type: 'TODDLE_BASKET'})
    }

    value.setGoods = (goods) => {
        dispatch({type: 'SET_GOODS', payload: goods})
    }

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};