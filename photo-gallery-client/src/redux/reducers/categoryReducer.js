import { categoryConstants } from "../actions/actionConstants";

const initState = {
    loading: false,
    category: [],
    error: null,
}

const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case categoryConstants.GET_ALL_CATEGORY_REQUEST:
            state = {
                ...state,
                loading:true
            }
            return state
        case categoryConstants.GET_ALL_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                category:action.payload
            }
            return state
        case categoryConstants.GET_ALL_CATEGORY_FAILURE:
            state = {
                ...state,
                loading: false,
                error:action.payload
            }
            return state
        default:
            return state;
    }
}

export default categoryReducer