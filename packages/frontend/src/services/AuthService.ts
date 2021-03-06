import { AUTH_KEY, UserJwtModel } from '@progress/api'
import jwtDecode from 'jwt-decode'
import config from 'src/config'
import http from 'src/services/http'
import { UniqueKey } from './UniqueKey'

export class AuthService {
  /**
   * Get JWT token which is stored in localStorage.
   *
   * @static
   * @returns
   * @memberof AuthService
   */
  static getJwt() {
    return localStorage.getItem(AUTH_KEY.TOKEN)
  }

  /**
   * Take encoded JWT and save back to localStorage.
   *
   * @static
   * @param {string} jwt
   * @memberof AuthService
   */
  static async saveJwt(jwt: string) {
    if (!jwt) return

    const jwtData = jwtDecode(jwt)
    localStorage.setItem(AUTH_KEY.TOKEN, jwt)
    localStorage.setItem(AUTH_KEY.USER, JSON.stringify(jwtData))
  }

  static getCurrentUser(): UserJwtModel | null {
    try {
      const jwt = localStorage.getItem(AUTH_KEY.TOKEN)
      return jwt ? jwtDecode(jwt) : null
    } catch (ex) {
      return null
    }
  }

  /**
   *
   *
   * @static
   * @param {string} jwt
   * @memberof AuthService
   */
  static loginWithJwt(jwt: string) {
    // localStorage.setItem(KEY_TOKEN, jwt);
    AuthService.saveJwt(jwt)
  }

  /**
   * Social login
   *
   * @static
   * @param {string} provider : 'google' | 'github' | ...
   * @memberof AuthService
   */
  static async loginSocial(provider: string) {
    const { API_HOST } = config()
    const { data: jwt } = await http.get(`${API_HOST}/v1/auth/${provider}`)
    AuthService.saveJwt(jwt)
  }

  static logout(forceUpdate?: Function): void {
    localStorage.removeItem(AUTH_KEY.TOKEN)
    localStorage.removeItem(AUTH_KEY.USER)

    if (forceUpdate) forceUpdate(UniqueKey.newKey())
  }
}
