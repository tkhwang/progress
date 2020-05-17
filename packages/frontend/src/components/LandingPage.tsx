import * as React from 'react'
import config from 'src/config'

export interface ILandingPageProps {}

export default function LandingPage(props: ILandingPageProps) {
	const { PROGRESS_URL } = config()
	return (
		<React.Fragment>
			<div className="App">
				<h1>Coming soon...</h1>
				<img src={`${PROGRESS_URL}/image/team_meeting__two_color.svg`} />
			</div>
		</React.Fragment>
	)
}

/*
			<ul>
				<li>
					Inspired by{' '}
					<a href='https://www.swyx.io/writing/learn-in-public/'>Learn In Public: The fastest way to learn</a>
				</li>
				<li>
					(Korean translation :{' '}
					<a href='https://tkhwang.me/2020-04-22-learn-in-public-korean-translation'>
						(번역) 공개적으로 학습하라
					</a>
					)
				</li>
			</ul>

			<img
				style={{ width: '70%' }}
				src='https://raw.githubusercontent.com/tkhwang/tkhwang-etc/master/img/2020/04/photo-1523240795612-9a054b0db644.jpeg'
				alt='new'
			/>
*/
