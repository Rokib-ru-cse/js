import {NAV_ACTION} from '../actions/index'

const initState = {
    month:1,
    active:1
}

const navReducer = (state=initState,action)=>{
    if(action.type == NAV_ACTION){
        return{
            ...state,
            month:action.payload,
            active:action.payload
        }
    }
    return state
}

export default navReducer