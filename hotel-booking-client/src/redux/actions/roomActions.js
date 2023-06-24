import { roomConstants } from './actionConstants'
import { axiosInstance as axios } from "../../utils/index"

const getAllRoom = () => {
    return async (dispatch) => {
        dispatch({
            type: roomConstants.GET_ALL_ROOM_REQUEST
        })
        try {
            const res = await axios.get('/getroom')
            if (res.status == 200) {
                dispatch({
                    type: roomConstants.GET_ALL_ROOM_SUCCESS,
                    payload: res.data.room
                })
            }
            else {
                dispatch({
                    type: roomConstants.GET_ALL_ROOM_FAILURE,
                    payload: res.data.error
                })
            }
        } catch (error) {
            dispatch({
                type:roomConstants.GET_ALL_ROOM_FAILURE,
                payload:'something went wrong'
            })
        }
    }
}

export const bookRoom = (data) => {
    return async (dispatch) => {
        dispatch({
            type: roomConstants.BOOK_ROOM_REQUEST
        })
        try {
            const res = await axios.put('/bookroom',data)
            if (res.status == 201) {
                dispatch({
                    type: roomConstants.BOOK_ROOM_SUCCESS,
                    payload: res.data.room
                })
                dispatch(getAllRoom())
            }
            else {
                dispatch({
                    type: roomConstants.GET_ALL_ROOM_FAILURE,
                    payload: res.data.error
                })
            }
        } catch (error) {
            dispatch({
                type:roomConstants.GET_ALL_ROOM_FAILURE,
                payload:'something went wrong'
            })
        }
    }
}

export {
    getAllRoom
}