import React from 'react'
import './App.css'
import { LandingPage } from './components/LandingPage'
import ButtonAppBar from './components/ButtonAppBar'

function App() {
	return (
		<div className="App">
			<ButtonAppBar />
			<LandingPage />
		</div>
	)
}

export default App
