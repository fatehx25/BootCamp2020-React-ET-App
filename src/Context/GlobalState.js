import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Creating Initial State
const initialState = {
    transactions: []
}

//Creating Context
export const GlobalContext = createContext(initialState);

//Creating Provider component
export const GlobalProvider = ({ children }) =>  {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value= {{ 
        transactions: state.transactions,
        deleteTransaction,
        addTransaction 
    }}>
            {children}
        </GlobalContext.Provider>);
}