import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import { Drawer } from 'antd'
import Axios from 'axios'
import React, { useCallback, useState } from 'react'
import { BrowserRouter, Link, Redirect } from 'react-router-dom'
import {
	FacebookLoginButton,
	GithubLoginButton,
	GoogleLoginButton,
	TwitterLoginButton
} from 'react-social-login-buttons'
import { LoginForm } from './LoginForm'
import { SocialLoginButton } from './SocialLoginButton'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}))

export default function ButtonAppBar() {
	const classes = useStyles()
	const [visibleLogin, setVisibleLogin] = useState(false)

	// const showDrawer = () => {
	// 	setVisibleLogin(false)
	// }

	const loginGoogle = async () => {
		const data = await Axios.get(`${process.env.REACT_APP_API_URL}/v1/auth/google`)
		console.log('loginGoogle -> data', data)
	}

	const socialLogin = `${process.env.REACT_APP_API_URL}/v1/auth/`

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<BrowserRouter>
					<Toolbar>
						<IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
							<MenuIcon />
						</IconButton>
						<Typography color='inherit' variant='h6' className={classes.title}>
							<a href='/'>Learn-In-Public</a>
						</Typography>
						<Button color='inherit' onClick={() => setVisibleLogin(true)}>
							Sign-in
						</Button>
					</Toolbar>
				</BrowserRouter>
			</AppBar>
			<Drawer
				title='Sign-in'
				placement='right'
				width='300'
				closable={false}
				onClose={() => setVisibleLogin(false)}
				visible={visibleLogin}
			>
				<SocialLoginButton social='google' />
				<GithubLoginButton onClick={() => alert('Hello')} />
				<FacebookLoginButton onClick={() => alert('Hello')} />
				<TwitterLoginButton onClick={() => alert('Hello')} />
				<hr />
				<LoginForm />
			</Drawer>
		</div>
	)
}
