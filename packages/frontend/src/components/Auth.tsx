import querystring from 'query-string'
import { useEffect } from 'react'
import { AuthService } from '../services/AuthService'

export interface IAuthProps {
	location: any
}

export default function Auth(props: IAuthProps) {
	useEffect(() => {
		const values = querystring.parse(props.location.search)
		if (values && values.token) AuthService.loginWithJwt(values.token as string)
	})

	return null
}
