import Axios, { AxiosInstance } from 'axios'
import config from './config'

export abstract class BaseAPI {
  constructor(
    protected client: AxiosInstance = Axios.create({
      baseURL: config().PROGRESS_API_URL,
    }),
  ) {}
}
