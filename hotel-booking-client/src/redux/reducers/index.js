import {combineReducers} from 'redux'
import authReducer from './authReducer'
import categoryReducer from './categoryReducer'
import roomReducer from './roomReducer'
const rootReducer = combineReducers({
    authReducer :authReducer,
    categoryReducer:categoryReducer,
    roomReducer:roomReducer  
})
export default rootReducer