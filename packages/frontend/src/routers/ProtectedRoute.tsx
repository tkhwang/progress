import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { RootContext } from 'src/stores/RootContext'
import { AuthService } from '../services/AuthService'

export interface IProtectedRouteProps {
  location: any
}

export default function ProtectedRoute({ path, component: Component, render, ...rest }: any) {
  const { user } = useContext(RootContext)

  return (
    <Route
      {...rest}
      render={(props: any) => {
        if (!AuthService.getCurrentUser()) {
          return (
            <Redirect
              to={{
                pathname: '/signin',
                state: { from: props.location },
              }}
            />
          )
        }
        return Component ? <Component {...props} /> : render(props)
      }}
    />
  )
}
