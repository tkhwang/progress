import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Drawer } from 'antd'
import SocialLoginButton from './SocialLoginButton'
import LoginForm from './LoginForm'
import {
  GithubLoginButton,
  FacebookLoginButton,
  TwitterLoginButton,
} from 'react-social-login-buttons'
import { AuthService } from 'src/services/AuthService'
import AvatarComp from './AvatarComp'

export interface IHeadingProps {
  forceUpdate: Function
}

export default function Heading(props: IHeadingProps) {
  const [visibleLogin, setVisibleLogin] = useState(false)

  return (
    <React.Fragment>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Learn-In-Public</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/interests">Interests</Nav.Link>
        </Nav>
        {AuthService.getCurrentUser() ? (
          <>
            <Button color="inherit" onClick={() => AuthService.logout(props.forceUpdate)}>
              logout
            </Button>
            <AvatarComp />
          </>
        ) : (
          <Button color="inherit" onClick={() => setVisibleLogin(true)}>
            sign-in
          </Button>
        )}
      </Navbar>
      <Drawer
        title="Sign-in"
        placement="right"
        width="300"
        closable={false}
        onClose={() => setVisibleLogin(false)}
        visible={visibleLogin}
      >
        <SocialLoginButton social="google" />
        <GithubLoginButton onClick={() => alert('Hello')} />
        <FacebookLoginButton onClick={() => alert('Hello')} />
        <TwitterLoginButton onClick={() => alert('Hello')} />
        <hr />
        <LoginForm />
      </Drawer>
    </React.Fragment>
  )
}
