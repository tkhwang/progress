import * as React from 'react'
import config from 'src/config'
import BodyContainer from './BodyContainer'

export interface ILandingPageProps {}

export default function LandingPage(props: ILandingPageProps) {
  const { CLIENT_HOST } = config()

  return (
    <React.Fragment>
      <BodyContainer>
        <h3>Today-I-Read</h3>
        <img src={`${CLIENT_HOST}/image/team_meeting__two_color.svg`} alt="landing page image" />
      </BodyContainer>
    </React.Fragment>
  )
}
