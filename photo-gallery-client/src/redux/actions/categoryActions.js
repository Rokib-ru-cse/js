import { categoryConstants } from './actionConstants'
import { axiosInstance as axios } from "../../utils/index"

export const getAllCategory = () => {
    return async(dispatch) => {
        dispatch({
            type: categoryConstants.GET_ALL_CATEGORY_REQUEST
        })
        const res = await axios.get('/getcategory')
        if (res.status == 200) {
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORY_SUCCESS,
                payload:res.data.data
            })
        } else {
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORY_FAILURE,
                payload:res.data.error
            })
        }
    }
}