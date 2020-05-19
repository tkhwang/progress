import * as React from 'react'
import config from 'src/config'

export interface ILandingPageProps {}

export default function LandingPage(props: ILandingPageProps) {
	const { PROGRESS_URL } = config()
	// <img src={`${PROGRESS_URL}/image/team_meeting__two_color.svg`} />
	return (
		<React.Fragment>
			<div className='App'>
				<h1>Coming soon...</h1>
				<img src={`${PROGRESS_URL}/image/team_meeting__two_color.svg`} />
			</div>
		</React.Fragment>
	)
}
