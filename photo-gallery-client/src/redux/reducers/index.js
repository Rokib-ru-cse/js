import {combineReducers} from 'redux'
import authReducer from './authReducer'
import photoReducer from './photoReducer'
import categoryReducer from './categoryReducer'
const rootReducer = combineReducers({
    authReducer :authReducer,
    photoReducer :photoReducer,
    categoryReducer:categoryReducer  
})
export default rootReducer