// import auth from '@services/AuthService'
import * as React from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import config from '../config';
import { AuthService } from '../services/AuthService';

export interface ISocialLoginButtonProps {
  social: string;
}

export default function SocialLoginButton({ social }: ISocialLoginButtonProps) {
  const { API_HOST } = config();
  const urlSocialAuth = `${API_HOST}/v1/auth/${social}`;
  let button;
  switch (social) {
    case 'google':
      button = <GoogleLoginButton onClick={() => AuthService.loginSocial('google')} />;
      break;
    default:
  }

  return (
    <React.Fragment>
      <a href={urlSocialAuth}>{button}</a>
    </React.Fragment>
  );
}
