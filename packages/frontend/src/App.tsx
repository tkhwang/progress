import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss'
import ButtonAppBar from './components/ButtonAppBar'
import { Signin } from './components/Signin'
import Auth from './pages/Auth'
import Interests from './pages/Interests'
import LandingPage from './pages/LandingPage'
import { Lip } from './pages/Lip'
import ProtectedRoute from './routers/ProtectedRoute'
import { AuthService } from './services/AuthService'
import Home from './pages/Home'

export const InterestsContext = createContext<{ interests: string[] }>({ interests: [] })

function App() {
  const [uniqueKey, setUniqueKey] = useState(new Date().getTime().toString())

  return (
    <React.Fragment>
      <ButtonAppBar key={uniqueKey} forceUpdate={setUniqueKey} />
      <main className="content" style={{ margin: 25 }}>
        <BrowserRouter>
          <Switch>
            <Route path="/token" component={Auth} />
            <Route path="/signin" component={Signin} />
            <ProtectedRoute exact={true} path="/interests" component={Interests} />
            <Route
              exact={true}
              path="/"
              render={
                AuthService.getCurrentUser()
                  ? () => <Home forceUpdate={setUniqueKey} />
                  : () => <LandingPage />
              }
            />
          </Switch>
        </BrowserRouter>
      </main>
    </React.Fragment>
  )
}

export default App
