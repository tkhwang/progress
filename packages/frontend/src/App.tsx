import React, { useState } from 'react'
import { withRouter, BrowserRouter, Route, Switch } from 'react-router-dom'
import Auth from './components/Auth'
import ButtonAppBar from './components/ButtonAppBar'
import LandingPage from './components/LandingPage'

import { Lip } from './components/Lip'
import ProtectedRoute from './components/ProtectedRoute'
import { Signin } from './components/Signin'
import './App.css'

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
            <ProtectedRoute path="/lip" render={() => <Lip forceUpdate={setUniqueKey} />} />
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </BrowserRouter>
      </main>
    </React.Fragment>
  )
}

export default App
