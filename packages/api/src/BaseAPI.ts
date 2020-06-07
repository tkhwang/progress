import Axios, { AxiosInstance } from 'axios'
import config from './config'
import { AUTH_KEY } from './models'

const getJwt = () => {
  return localStorage.getItem(AUTH_KEY.TOKEN)
}

export abstract class BaseAPI {
  constructor(
    protected client: AxiosInstance = Axios.create({
      baseURL: config().API_HOST,
      headers: getJwt() ? { Authorization: `Bearer ${getJwt()}` } : {},
    }),
  ) {}
}
