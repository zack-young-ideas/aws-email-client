import { useState } from 'react'
import './App.scss'
import AccessTokenSetup from './components/AccessTokenSetup';
import SmtpSetup from './components/SmtpSetup';

function App() {

  const [setupPage, setSetupPage] = useState('accessToken');

  const accessTokenHandler = async (accessTokenId, secretAccessToken) => {
    /*
    Called when the user enters their access token ID and secret access
    token.
    */
    let response;
    try {
      response = await window.api.updateAccessTokens(
        accessTokenId,
        secretAccessToken
      );
    } catch (error) {
      // Display an error message to the user.
      response = false;
    } finally {
      if (response) {
        setSetupPage('smtp');
      }
    }
  }

  const smtpHandler = async (username, password) => {
    /*
    Called when the user enters their SMTP credentials.
    */
    let response;
    try {
      response = await window.api.updateSmtpCredentials(
        username,
        password
      );
    } catch (error) {
      // Display an error message to the user.
      response = false;
    } finally {
      if (response) {
        setSetupPage('none');
      }
    }
  }

  switch (setupPage) {
    case 'accessToken':
      return (
        <AccessTokenSetup submitHandler={accessTokenHandler} />
      )
    case 'smtp':
      return (
        <SmtpSetup submitHandler={smtpHandler} />
      )
    default:
      return <div></div>;
  }
}

export default App
