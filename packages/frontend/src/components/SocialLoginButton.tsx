// import auth from '@services/AuthService'
import * as React from 'react'
import { GithubLoginButton, GoogleLoginButton } from 'react-social-login-buttons'
import config from '../config'
import { AuthService } from '../services/AuthService'

export interface ISocialLoginButtonProps {
	social: string
}

const { API_URL } = config()

export default function SocialLoginButton({ social }: ISocialLoginButtonProps) {
	const urlSocialAuth = `${API_URL}/v1/auth/${social}`
	let button
	switch (social) {
		case 'google':
			button = <GoogleLoginButton onClick={() => AuthService.loginSocial('google')} />
			break
		default:
	}

	return (
		<React.Fragment>
			<a href={urlSocialAuth}>{button}</a>
		</React.Fragment>
	)
}
