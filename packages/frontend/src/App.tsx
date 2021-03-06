import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss'
import { Signin } from './components/Signin'
import Auth from './pages/Auth'
import Interest from './pages/Interest'
import LandingPage from './pages/LandingPage'
import ProtectedRoute from './routers/ProtectedRoute'
import { AuthService } from './services/AuthService'
import Interests from './pages/Interests'
import Heading from './components/Heading'
import Refresh from './pages/Refresh'
import Counter from './Counter'
import { BookmarkWrapperPage } from './pages/BookmarkWrapperPage'

export const InterestsContext = createContext<{ interests: string[] }>({ interests: [] })

function App() {
  const [uniqueKey, setUniqueKey] = useState(new Date().getTime().toString())

  return (
    <React.Fragment>
      <Heading forceUpdate={setUniqueKey} />
      <main className="content" style={{ margin: 25 }}>
        <BrowserRouter>
          <Switch>
            <Route path="/token" component={Auth} />
            <Route path="/refresh" render={() => <Refresh forceUpdate={setUniqueKey} />} />
            <Route path="/signin" component={Signin} />
            <Route path="/counter" component={Counter} />
            <ProtectedRoute exact={true} path="/interest" component={Interest} />
            <ProtectedRoute
              exact={true}
              path="/interests"
              render={() => <Interests forceUpdate={setUniqueKey} />}
            />
            <Route
              exact={true}
              path="/"
              render={
                AuthService.getCurrentUser() ? () => <BookmarkWrapperPage /> : () => <LandingPage />
              }
            />
          </Switch>
        </BrowserRouter>
      </main>
    </React.Fragment>
  )
}

export default App
