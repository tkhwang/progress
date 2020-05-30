import { APIS, InterestGetInterestsRequest } from '@progress/api'
import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss'
import Auth from './components/Auth'
import ButtonAppBar from './components/ButtonAppBar'
import ProtectedRoute from './components/ProtectedRoute'
import { Signin } from './components/Signin'
import { Interests } from './pages/Interests'
import LandingPage from './pages/LandingPage'
import { Lip } from './pages/Lip'
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
  }, interests)

  return (
    <React.Fragment>
      <ButtonAppBar key={uniqueKey} forceUpdate={setUniqueKey} />
      <main className="content" style={{ margin: 25 }}>
        <BrowserRouter>
          <Switch>
            <Route path="/token" component={Auth} />
            <Route path="/signin" component={Signin} />
            <InterestsContext.Provider value={{ interests }}>
              <ProtectedRoute exact path="/lip" render={() => <Lip forceUpdate={setUniqueKey} />} />
              <ProtectedRoute exact path="/lip/interests" render={() => <Interests />} />
            </InterestsContext.Provider>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </BrowserRouter>
      </main>
    </React.Fragment>
  )
}

export default App
