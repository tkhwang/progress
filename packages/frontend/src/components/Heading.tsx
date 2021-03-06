import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { Drawer } from 'antd'
import SocialLoginButton from './SocialLoginButton'
import {
  GithubLoginButton,
  FacebookLoginButton,
  TwitterLoginButton,
} from 'react-social-login-buttons'
import { AuthService } from 'src/services/AuthService'
import AvatarComp from './AvatarComp'
import Menubar from './Menubar'
import { GrOptimize } from 'react-icons/gr'
import { FcAreaChart } from 'react-icons/fc'
import NavDropdown from 'react-bootstrap/NavDropdown'

export interface IHeadingProps {
  forceUpdate: Function
}

export default function Heading(props: IHeadingProps) {
  const [visibleLogin, setVisibleLogin] = useState(false)

  const renderAvatar = () => {
    return (
      <React.Fragment>
        {AuthService.getCurrentUser() ? (
          <>
            <Button size="sm" color="inherit" onClick={() => AuthService.logout(props.forceUpdate)}>
              <AvatarComp />
            </Button>
          </>
        ) : (
          <Button color="inherit" onClick={() => setVisibleLogin(true)}>
            sign-in
          </Button>
        )}
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Navbar sticky="top" bg="primary" variant="dark">
        <Navbar.Brand href="/">
          <FcAreaChart color="white" /> progress
        </Navbar.Brand>
        <Navbar.Collapse>
          {AuthService.getCurrentUser() && (
            <div style={{ width: '100%' }}>
              <Menubar />
            </div>
          )}
        </Navbar.Collapse>
        <Navbar className="mr-sm-2">{renderAvatar()}</Navbar>
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
      </Drawer>
    </React.Fragment>
  )
}
