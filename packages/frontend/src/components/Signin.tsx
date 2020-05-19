import * as React from 'react'
import { FacebookLoginButton, GithubLoginButton, TwitterLoginButton } from 'react-social-login-buttons'
import SocialLoginButton from './SocialLoginButton'

export interface ISigninProps {}

export function Signin(props: ISigninProps) {
	return (
		<div>
			<h1>Login</h1>
			<SocialLoginButton social='google' />
			<GithubLoginButton onClick={() => alert('Hello')} />
			<FacebookLoginButton onClick={() => alert('Hello')} />
			<TwitterLoginButton onClick={() => alert('Hello')} />
		</div>
	)
}
