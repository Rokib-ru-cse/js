import axios from "axios";
import { API } from "../urlConfig";
import store from "../store/index";
import { authConstants } from "../store/actions/actionConstants";

const token = window.localStorage.getItem("token");

const axiosIntance = axios.create({
    baseURL: API,
    headers: {
        Authorization: token ? `Bearer ${token}` : "",
    },
});

axiosIntance.interceptors.request.use((req) => {
    const { authReducers } = store.getState()
    if (authReducers.token) {
        req.headers.Authorization = `Bearer ${authReducers.token}`;
    }
    return req;
});

axiosIntance.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        console.log(error.response);
        const status = error.response ? error.response.status : 500;
        if (status && status === 500) {
            localStorage.clear();
            store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
        }
        return Promise.reject(error);
    }
);

export default axiosIntance;
