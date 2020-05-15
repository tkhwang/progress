import * as React from 'react'
import config from '../config'
import { GithubLoginButton, GoogleLoginButton } from 'react-social-login-buttons'

export interface ISocialLoginButtonProps {
	social: string
}

const { API_URL } = config()

export function SocialLoginButton({ social }: ISocialLoginButtonProps) {
	const urlSocialAuth = `${API_URL}/v1/auth/${social}`
	let Button
	switch (social) {
		case 'google':
			Button = <GoogleLoginButton />
			break
		default:
			break
	}
	return (
		<React.Fragment>
			<a href={urlSocialAuth}>{Button}</a>
		</React.Fragment>
	)
}
