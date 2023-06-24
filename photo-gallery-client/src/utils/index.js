import axios from 'axios'
const API = window.location.hostname==='localhost' ? 'http://localhost:4000/api' : 'https://photo-gallery-serverr.herokuapp.com/api'
export const generatePublicUrl = (url)=>{
    return `${API}/public/${url}`
}

export const axiosInstance = axios.create({
    baseURL: `${API}`,
  });