import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import customersReducers from "../Reducer/customersReducer";
import { combineReducers } from "redux"
import rootSaga from "../Saga"
import createSagaMiddleware from "@redux-saga/core";


const saga = createSagaMiddleware()

const reducer = combineReducers({
    customersReducers : customersReducers,
})

const store = configureStore({
    reducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(saga)
})

saga.run(rootSaga)

export default store