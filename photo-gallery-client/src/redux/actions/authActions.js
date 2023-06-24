import { axiosInstance as axios } from "../../utils/index"
import { authConstants } from "./actionConstants"

export const getAllUser = () => {
    return async (dispatch) => {
        const res = await axios.get('/alluser')
        if (res.status == 200) {
            dispatch({
                type: authConstants.GET_ALL_USER_SUCCESS,
                payload: res.data.user
            })
        }
    }
}
export const isUserLoggedIn = () => {
    return (dispatch) => {
        const token = JSON.parse(localStorage.getItem('token'))
        const user = JSON.parse(localStorage.getItem('user'))
        if (token) {
            dispatch({
                type: authConstants.USER_LOGIN_SUCCESS,
                payload: {
                    token: token,
                    user: user
                }
            })
        } else {
            dispatch({
                type: authConstants.USER_LOGIN_FAILURE,
                payload: "can't logged in"
            })
        }
    }
}

export const logout = () => {
    return (dispatch) => {
        localStorage.clear()
        dispatch({
            type: authConstants.USER_LOGIN_FAILURE,
            payload: "can't logged in"
        })
    }
}

export const login = (data) => {
    return async (dispatch) => {
        dispatch({ type: authConstants.USER_LOGIN_REQUEST })
        try {
            const res = await axios.post('/login', data)
            console.log(res.status);
            if (res.status == 200) {
                localStorage.setItem('token', JSON.stringify(res.data.token))
                localStorage.setItem('user', JSON.stringify(res.data.user))
                dispatch({
                    type: authConstants.USER_LOGIN_SUCCESS,
                    payload: {
                        token: res.data.token,
                        user: res.data.user
                    }
                })

            } else {
                dispatch({
                    type: authConstants.USER_LOGIN_FAILURE,
                    payload: res.data.error
                })
                dispatch({
                    type: authConstants.USER_LOGIN_ERROR
                })
            }
        } catch (error) {
            alert("invalid credentials")
            dispatch({
                type: authConstants.USER_LOGIN_FAILURE,
                payload: "wronginfo"
            })

        }

    }
}
export const signup = (data) => {

    return async (dispatch) => {
        dispatch({ type: authConstants.USER_SIGNUP_REQUEST })
        try {
            const res = await axios.post('/signup', data)
            if (res.status == 201) {
                localStorage.setItem('token', JSON.stringify(res.data.token))
                localStorage.setItem('user', JSON.stringify(res.data.user))
                dispatch({
                    type: authConstants.USER_SIGNUP_SUCCESS,
                    payload: {
                        token: res.data.token,
                        user: res.data.user
                    }
                })

            } else {
                dispatch({
                    type: authConstants.USER_SIGNUP_FAILURE,
                    payload: res.data.error
                })
            }
        } catch (error) {
            alert("invalid credentials")
            dispatch({
                type: authConstants.USER_SIGNUP_FAILURE,
                payload: 'wrong credentials'
            })
        }


    }
}
