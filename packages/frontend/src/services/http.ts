import axios from 'axios'
// import Raven from 'raven-js'
import { toast } from 'react-toastify'

let response
axios.interceptors.response.use(response, (error: any) => {
  const expectedError =
    error.response && error.response.status >= 400 && error.response.status < 500

  if (!expectedError) {
    // Raven.captureException(error)
    toast.error('An expected error occurred.')
  }

  return Promise.reject(error)
})

function setJwt(jwt: string) {
  axios.defaults.headers.common['x-auth-token'] = jwt
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
}
