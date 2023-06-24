import { roomConstants } from "../actions/actionConstants";

const initState = {
    loading: false,
    room: [],
    error: null,
}

const roomReducer = (state = initState, action) => {
    switch (action.type) {
        case roomConstants.GET_ALL_ROOM_REQUEST:
            state = {
                ...state,
                loading: true
            }
            return state
        case roomConstants.GET_ALL_ROOM_SUCCESS:
            state = {
                ...state,
                loading: false,
                room:action.payload
            }
            return state
        case roomConstants.GET_ALL_ROOM_FAILURE:
            state = {
                ...state,
                loading: false,
                room:[],
                error:action.payload
            }
            return state
        default:
            return state;
    }
}

export default roomReducer