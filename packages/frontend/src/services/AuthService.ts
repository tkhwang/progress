import Axios from 'axios'

export async function loginSocial(provider: string) {
	const { data } = await Axios.get(`${process.env.REACT_APP_API_URL}/v1/auth/${provider}`)
	console.log('loginSocial -> data', data)
}

export default { loginSocial: loginSocial }
