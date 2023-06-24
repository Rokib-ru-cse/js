import { authConstants } from "../actions/actionConstants";

const initState = {
    loading: false,
    authenticate: false,
    user: {},
    error: null,
    token: null,
    alluser: null,
    login: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case authConstants.GET_ALL_USER_SUCCESS:
            state = {
                ...state,
                alluser: action.payload
            }
            return state
        case authConstants.USER_LOGIN_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            return state
        case authConstants.USER_LOGIN_SUCCESS:
            state = {
                ...state,
                loading: false,
                authenticate: true,
                token: action.payload.token,
                user: action.payload.user,
                login:false
            }
            return state
        case authConstants.USER_LOGIN_FAILURE:
            state = {
                ...state,
                loading: false,
                authenticate: false,
                error: action.payload,
                user: {}
            }
            return state
        case authConstants.USER_SIGNUP_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            return state
        case authConstants.USER_SIGNUP_SUCCESS:
            state = {
                ...state,
                loading: false,
                authenticate: true,
                token: action.payload.token,
                user: action.payload.user
            }
            return state
        case authConstants.USER_SIGNUP_FAILURE:
            state = {
                ...state,
                loading: false,
                authenticate: false,
                error: action.payload
            }
            return state
        default:
            return state;
    }
}

export default authReducer