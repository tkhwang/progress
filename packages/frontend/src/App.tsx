import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss'
import Auth from './components/Auth'
import ButtonAppBar from './components/ButtonAppBar'
import ProtectedRoute from './components/ProtectedRoute'
import { Signin } from './components/Signin'
import { Interests } from './pages/Interests'
import LandingPage from './pages/LandingPage'
import { Lip } from './pages/Lip'

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
            <ProtectedRoute exact path="/lip" render={() => <Lip forceUpdate={setUniqueKey} />} />
            <ProtectedRoute exact path="/lip/interests" render={() => <Interests />} />
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </BrowserRouter>
      </main>
    </React.Fragment>
  )
}

export default App
