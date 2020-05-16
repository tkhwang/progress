// import auth from '@services/AuthService'
import * as React from 'react'
import { GithubLoginButton, GoogleLoginButton } from 'react-social-login-buttons'
import config from '../config'
import auth from '../services/AuthService'

export interface ISocialLoginButtonProps {
	social: string
}

const { API_URL } = config()

export function SocialLoginButton({ social }: ISocialLoginButtonProps) {
	const urlSocialAuth = `${API_URL}/v1/auth/${social}`
	let Button
	switch (social) {
		case 'google':
			Button = <GoogleLoginButton onClick={() => auth.loginSocial('google')} />
			break
		default:
	}
	return (
		<React.Fragment>
			<a href={urlSocialAuth}>{Button}</a>
		</React.Fragment>
	)
}
