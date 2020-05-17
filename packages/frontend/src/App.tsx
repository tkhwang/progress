import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Auth from './components/Auth'
import ButtonAppBar from './components/ButtonAppBar'
import LandingPage from './components/LandingPage'

import './App.css'

function App() {
	// <Route path='/token' component={Auth} />
	return (
		<React.Fragment>
			<ButtonAppBar />
			<main className='content'>
				<BrowserRouter>
					<Switch>
						<Route path='/token' component={Auth} />
					</Switch>
				</BrowserRouter>
			</main>
			<LandingPage />
		</React.Fragment>
	)
}

export default App
