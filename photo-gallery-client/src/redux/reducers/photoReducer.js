import { photoConstants } from "../actions/actionConstants";

const initState = {
    loading: false,
    photo: [],
    error: null
}

const photoReducer = (state = initState, action) => {
    switch (action.type) {
        case photoConstants.PHOTO_GET_REQUEST:
            state = {
                loading: true,
                photo: []
            }
            return state
        case photoConstants.PHOTO_GET_SUCCESS:
            state = {
                ...state,
                photo: action.payload,
                loading: false
            }
            return state
        case photoConstants.PHOTO_GET_FAILURE:
            state = {
                ...state,
                error: action.payload,
                loading: false
            }
            return state
        case photoConstants.PHOTO_POST_SUCCESS:
            state = {
                ...state,
                photo: state.photo.concat(action.payload),
                loading: false
            }
            return state

        default:
            return state
    }
}

export default photoReducer