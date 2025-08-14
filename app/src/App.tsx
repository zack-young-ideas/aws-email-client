import { useState } from 'react'
import './App.scss'
import AccessTokenSetup from './components/AccessTokenSetup';
import SmtpSetup from './components/SmtpSetup';

function App() {

  const [setupPage, setSetupPage] = useState('accessToken');
  const [setupPageError, setSetupPageError] = useState('');

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
      setSetupPageError(
        'Unable to validate access token ID and secret access token'
      );
    } finally {
      if (response.ok) {
        setSetupPage('smtp');
      } else {
        const body = await response.json()
        setSetupPageError(body.message);
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
      setSetupPageError(
        'Unable to validate access token ID and secret access token'
      );
    } finally {
      if (response.ok) {
        setSetupPage('none');
      } else {
        const body = await response.json()
        setSetupPageError(body.message);
      }
    }
  }

  switch (setupPage) {
    case 'accessToken':
      return (
        <AccessTokenSetup
          errorMessage={setupPageError}
          submitHandler={accessTokenHandler}
        />
      )
    case 'smtp':
      return (
        <SmtpSetup
          errorMessage={setupPageError}
          submitHandler={smtpHandler}
        />
      )
    default:
      return <div></div>;
  }
}

export default App
