import React from 'react'
import './App.css'
import ButtonAppBar from './components/ButtonAppBar'

function App() {
	return (
		<div className="App">
			<ButtonAppBar />
			<ul>
				<li>
					Inspired by{' '}
					<a href="https://www.swyx.io/writing/learn-in-public/">Learn In Public: The fastest way to learn</a>
				</li>
				<li>
					(Korean translation :{' '}
					<a href="https://tkhwang.me/2020-04-22-learn-in-public-korean-translation">
						(번역) 공개적으로 학습하라
					</a>
					)
				</li>
			</ul>

			<img
				src="https://raw.githubusercontent.com/tkhwang/tkhwang-etc/master/img/2020/04/photo-1523240795612-9a054b0db644.jpeg"
				alt="new"
			/>
		</div>
	)
}

export default App
