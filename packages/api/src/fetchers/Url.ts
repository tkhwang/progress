import { BaseAPI } from '../BaseAPI'

export class Url extends BaseAPI {
  public hello() {
    return this.API_HOST
  }
}
