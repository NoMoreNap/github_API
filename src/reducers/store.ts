import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { githubApi } from './api'
import { data } from './reducer'
const root = combineReducers({
    [githubApi.reducerPath]: githubApi.reducer,
    [data.name]: data.reducer
})

export const store = configureStore({
    reducer: root,
    middleware: (defaultMiddleware) => defaultMiddleware().concat(githubApi.middleware)
})