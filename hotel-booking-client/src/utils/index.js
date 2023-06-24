import axios from 'axios'
const API = window.location.hostname==='localhost' ? 'http://localhost:4000/api' : 'https://hotelbooking-server.herokuapp.com/api' 
export const generatePublicUrl = (url)=>{
    return `${API}/public/${url}`
}

export const axiosInstance = axios.create({
    baseURL: `${API}`,
  });