import Axios, { AxiosInstance } from 'axios'
import config from './config'

const { PROGRESS_API_URL } = config()

export abstract class BaseAPI {
  constructor(
    protected API_HOST = PROGRESS_API_URL,
    protected client: AxiosInstance = Axios.create(),
    protected authorization: string = authorization,
  ) {}
}
