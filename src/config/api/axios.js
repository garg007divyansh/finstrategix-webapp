import axios from 'axios'
import {getItem, removeAll, setItem} from '../../utilities/authUtils'

const url = process.env.REACT_APP_API_URL
const apiInstance = axios.create({
  baseURL: url,
  crossDomain: false,
})
apiInstance.interceptors.request.use((config) => {
  const token = getItem('token')
  //org id needs to be stored in localStorage for axios configuration
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})

apiInstance.interceptors.response.use(
  (response) => {
    // If the request is successful, just return the response
    return response;
  },
  (error) => {
    // If the response has a status code of 401, handle it here
    if (error.response && error.response.status === 401) {
      removeAll()
      setItem('isSessionExpired', true);
      window.location.href = '/login'
    }
    // Return a rejected promise to allow further handling of the error
    return Promise.reject(error);
  }
);

export default apiInstance
