import { Col, Row } from 'antd'
import * as React from 'react'
import { FacebookLoginButton, GithubLoginButton, TwitterLoginButton } from 'react-social-login-buttons'
import config from 'src/config'
import SocialLoginButton from './SocialLoginButton'

export interface ISigninProps {}

export function Signin(props: ISigninProps) {
	const { PROGRESS_URL } = config()

	return (
		<div>
			<Row>
				<Col span={12}>
					<img src={`${PROGRESS_URL}/image/123.svg`} />
				</Col>
				<Col span={12}>
					<div style={{ padding: 30 }}>
						<SocialLoginButton social='google' />
						<GithubLoginButton onClick={() => alert('Hello')} />
						<FacebookLoginButton onClick={() => alert('Hello')} />
						<TwitterLoginButton onClick={() => alert('Hello')} />
					</div>
				</Col>
			</Row>
		</div>
	)
}
