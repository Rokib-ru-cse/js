import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import navReducer from '../reducers/index'

const store = createStore(navReducer,applyMiddleware(thunk))

export default store