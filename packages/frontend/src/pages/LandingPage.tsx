import * as React from 'react';
import config from 'src/config';

export interface ILandingPageProps {}

export default function LandingPage(props: ILandingPageProps) {
  const { CLIENT_HOST } = config();

  return (
    <React.Fragment>
      <div className="App">
        <h1>Coming soon...</h1>
        <img src={`${CLIENT_HOST}/image/team_meeting__two_color.svg`} alt="landing page image" />
      </div>
    </React.Fragment>
  );
}
