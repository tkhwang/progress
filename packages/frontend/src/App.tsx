import React from 'react'
import { Route } from 'react-router-dom'
import { Auth } from './components/Auth'
import ButtonAppBar from './components/ButtonAppBar'
import { LandingPage } from './components/LandingPage'

import './App.css'

function App() {
	// <Route path='/token' component={Auth} />
	return (
		<div className='App'>
			<ButtonAppBar />
			<LandingPage />
		</div>
	)
}

export default App
