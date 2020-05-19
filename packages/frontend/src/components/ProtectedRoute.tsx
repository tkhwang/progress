import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthService } from '../services/AuthService'

export interface IProtectedRouteProps {
	location: any
}

export default function ProtectedRoute({ path, component: Component, render, ...rest }: any) {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (!AuthService.getCurrentUser()) {
					return (
						<Redirect
							to={{
								pathname: '/signin',
								state: { from: props.location }
							}}
						/>
					)
				}
				return Component ? <Component {...props} /> : render(props)
			}}
		/>
	)
}
