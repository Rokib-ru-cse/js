import { photoConstants } from './actionConstants'
import { axiosInstance as axios } from "../../utils/index"

const getPhotos = () => {
  return async (dispatch) => {
    dispatch({
      type: photoConstants.PHOTO_GET_REQUEST
    })
    const res = await axios.get('/getphotos')
    if (res.status == 200) {
      dispatch({
        type: photoConstants.PHOTO_GET_SUCCESS,
        payload: res.data.photo
      })
    }
    else {
      dispatch({
        type: photoConstants.PHOTO_GET_FAILURE,
        payload: res.error
      })
    }
  }
}


export const uploadPhoto = (data) => {
  return async (dispatch) => {
    dispatch({
      type: photoConstants.PHOTO_POST_REQUEST
    })
    const res = await axios.post('/createphoto', data)
    if (res.status == 201) {
      dispatch({
        type: photoConstants.PHOTO_POST_SUCCESS,
        payload: res.data.photo
      })
    }
    else {
      dispatch({
        type: photoConstants.PHOTO_POST_FAILURE,
        payload: res.error
      })
    }
  }
}
export const updatePhoto = (data) => {
  return async (dispatch) => {
    dispatch({
      type: photoConstants.PHOTO_UPDATE_REQUEST
    })
    const res = await axios.put('/updatephoto', data)
    console.log(res);
    if (res.status == 201) {
      const res = await axios.get('/getphotos')
      if (res.status == 200) {
        dispatch({
          type: photoConstants.PHOTO_GET_SUCCESS,
          payload: res.data.photo
        })
      }
      else {
        dispatch({
          type: photoConstants.PHOTO_GET_FAILURE,
          payload: res.error
        })
      }
    }
    else {
      dispatch({
        type: photoConstants.PHOTO_UPDATE_FAILURE,
        payload: res.error
      })
    }
  }
}

export {
  getPhotos
}