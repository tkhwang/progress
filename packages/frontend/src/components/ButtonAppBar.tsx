import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Drawer, Button as AntdButton, Radio, Space } from 'antd';
import { GithubLoginButton, FacebookLoginButton, TwitterLoginButton, GoogleLoginButton } from "react-social-login-buttons";

const useStyles = makeStyles((theme) => ({
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

export default function ButtonAppBar() {
	const classes = useStyles()
	const [visibleLogin, setVisibleLogin] = useState(false)

	const showDrawer = () => {
		setVisibleLogin(false)
	}

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Learn-In-Public
					</Typography>
					<Button color="inherit" onClick={() => setVisibleLogin(true)}>Sign-in</Button>
				</Toolbar>
			</AppBar>
			<Drawer
				title="Sign-in"
				placement='right'
				width="300"
				closable={false}
				onClose={() => setVisibleLogin(false)}
				visible={visibleLogin}
			>
				<GithubLoginButton onClick={() => alert("Hello")} />
				<FacebookLoginButton onClick={() => alert("Hello")} />
				<TwitterLoginButton onClick={() => alert("Hello")} />
				<GoogleLoginButton onClick={() => alert("Hello")} />
			</Drawer>
		</div>
	)
}
