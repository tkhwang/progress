import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import { Drawer } from 'antd'
import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
  FacebookLoginButton,
  GithubLoginButton,
  TwitterLoginButton,
} from 'react-social-login-buttons'
import { AuthService } from '../services/AuthService'
import AvatarComp from './AvatarComp'
import LoginForm from './LoginForm'
import SocialLoginButton from './SocialLoginButton'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export interface IButtonAppBarProps {
  key: string
  forceUpdate: Function
}

export default function ButtonAppBar(props: IButtonAppBarProps) {
  const classes = useStyles()
  const [visibleLogin, setVisibleLogin] = useState(false)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <BrowserRouter>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography color="inherit" variant="h6" className={classes.title}>
              <a href="/">Learn-In-Public</a>
            </Typography>
            {AuthService.getCurrentUser() ? (
              <>
                <Button color="inherit" onClick={() => AuthService.logout(props.forceUpdate)}>
                  Logout
                </Button>
                <AvatarComp />
              </>
            ) : (
              <Button color="inherit" onClick={() => setVisibleLogin(true)}>
                Sign-in
              </Button>
            )}
          </Toolbar>
        </BrowserRouter>
      </AppBar>
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
    </div>
  )
}
