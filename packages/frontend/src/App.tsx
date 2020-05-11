import React from 'react'
import './App.css'
import { LandingPage } from './components/LandingPage'
import ButtonAppBar from './components/ButtonAppBar'
import { GrommetHeader } from './components/GrommetHeader'
import { GrommetFooter } from './components/GrommetFooter'
import { Main } from 'grommet'

function App() {
	return (
		<div className="App">
			<GrommetHeader />
			<ButtonAppBar />
			<Main pad="small">
				<LandingPage />
			</Main>
			<GrommetFooter />
		</div>
	)
}

export default App
