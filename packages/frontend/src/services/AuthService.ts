import { AUTH_KEY } from '@progress/api'
import Axios from 'axios'
import jwtDecode from 'jwt-decode'

export class AuthService {
	static getJwt() {
		return localStorage.getItem(AUTH_KEY.TOKEN)
	}

	static async saveJwt(jwt: string) {
		if (!jwt) return

		const jwtData = jwtDecode(jwt)
		localStorage.setItem(AUTH_KEY.TOKEN, jwt)
		localStorage.setItem(AUTH_KEY.USER, JSON.stringify(jwtData))
	}

	static getCurrentUser(): string | null {
		try {
			const jwt = localStorage.getItem(AUTH_KEY.TOKEN)
			return jwt ? jwtDecode(jwt) : null
		} catch (ex) {
			return null
		}
	}

	static logout(): void {
		localStorage.removeItem(AUTH_KEY.TOKEN)
		localStorage.removeItem(AUTH_KEY.USER)
	}

	/**
	 * Social login
	 *
	 * @static
	 * @param {string} provider : 'google' | 'github' | ...
	 * @memberof AuthService
	 */
	static async loginSocial(provider: string) {
		const { data: jwt } = await Axios.get(`${process.env.REACT_APP_API_URL}/v1/auth/${provider}`)
		// localStorage.setItem(KEY_TOKEN, jwt);
		AuthService.saveJwt(jwt)
	}
}
