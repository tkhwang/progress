import * as React from 'react'
import {
  FacebookLoginButton,
  GithubLoginButton,
  TwitterLoginButton,
} from 'react-social-login-buttons'
import config from 'src/config'
import SocialLoginButton from './SocialLoginButton'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export interface ISigninProps {}

export function Signin(props: ISigninProps) {
  const { CLIENT_HOST } = config()

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <img src={`${CLIENT_HOST}/image/123.svg`} alt="image" />
        </Col>
        <Col sm={6}>
          <SocialLoginButton social="google" />
          <GithubLoginButton onClick={() => alert('Hello')} />
          <FacebookLoginButton onClick={() => alert('Hello')} />
          <TwitterLoginButton onClick={() => alert('Hello')} />
        </Col>
      </Row>
    </Container>
  )
}
