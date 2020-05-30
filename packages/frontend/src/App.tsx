import { APIS, InterestGetInterestsRequest } from '@progress/api'
import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss'
import ButtonAppBar from './components/ButtonAppBar'
import { Signin } from './components/Signin'
import Auth from './pages/Auth'
import { Interests } from './pages/Interests'
import LandingPage from './pages/LandingPage'
import { Lip } from './pages/Lip'
import ProtectedRoute from './routers/ProtectedRoute'
import { AuthService } from './services/AuthService'

export const InterestsContext = createContext<{ interests: string[] }>({ interests: [] })

function App() {
  const [uniqueKey, setUniqueKey] = useState(new Date().getTime().toString())
  const [interests, setInterests] = useState<string[]>([])

  useEffect(() => {
    const apis = new APIS.Interest()
    const fetchData = async () => {
      const user: any = AuthService.getCurrentUser()
      if (user) {
        const params = new InterestGetInterestsRequest()
        params.user = user.id
        const data = await apis.getInterests(params)
        setInterests([
          ...interests.filter((d: string) => d !== 'Add new'),
          ...data.filter((d: any) => d !== 'Add new').map((d: any) => d.interest),
          'Add new',
        ])
      }
    }
    fetchData()
  }, [...interests])

  // <InterestsContext.Provider value={{ interests }}>
  // </InterestsContext.Provider>
  return (
    <React.Fragment>
      <ButtonAppBar key={uniqueKey} forceUpdate={setUniqueKey} />
      <main className="content" style={{ margin: 25 }}>
        <BrowserRouter>
          <Switch>
            <Route path="/token" component={Auth} />
            <Route path="/signin" component={Signin} />
            <ProtectedRoute exact path="/interests" component={Interests} />
            <Route
              exact
              path="/"
              render={
                AuthService.getCurrentUser()
                  ? () => <Lip forceUpdate={setUniqueKey} />
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
