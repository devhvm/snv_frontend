import axios from 'axios'
import * as config from './config'
import token from './jwtToken'

const instance = axios.create({
  baseURL: config.API_URL
})
instance.interceptors.request.use(
  config => {
    config.headers = {
      Authorization: token()
    }
    return config
  },
  error => {
    /* eslint-disable */
    return Promise.reject(error)
    /* eslint-enable */
  }
)
export const rest = instance
