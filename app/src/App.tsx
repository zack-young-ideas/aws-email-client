import { useEffect, useState } from 'react'
import './App.scss'
import AccessKeySetup from './components/AccessKeySetup';
import Overview from './components/Overview';
import SmtpSetup from './components/SmtpSetup';

function App({ apiObject }: { apiObject: any }) {

  const [emails, setEmails] = useState([]);
  const [page, setPage] = useState('accessKey');
  const [setupPageError, setSetupPageError] = useState('');

  useEffect(() => {
    const onLoad = async () => {
      /*
      Checks to see if the user had previously entered their
      credentials. If not, they are prompted to complete the setup
      process.
      */
      let response;
      try {
        response = await apiObject.getSetupData();
        if (response.ok) {
          const body = await response.json();
          if (body.accessKeyId && body.smtpCredentials) {
            setPage('overview');
            await getEmails();
          }
          if (body.accessKeyId && !body.smtpCredentials) {
            setPage('smtp');
          }
        }
      } catch (error) {
        console.error('Cannot load setup data');
      }
    }
    onLoad();
  }, []);

  const getEmails = async () => {
    const response = await apiObject.getEmails();
    if (response.ok) {
      const body = await response.json();
      setEmails(body.emails);
    }
  }

  const accessKeyHandler = async (accessKeyId, secretAccessKey) => {
    /*
    Called when the user enters their access token ID and secret access
    token.
    */
    let response;
    try {
      response = await apiObject.updateAccessKeys(
        accessKeyId,
        secretAccessKey
      );
      if (response.ok) {
        setPage('smtp');
      } else {
        // Display an error message to the user if their credentials
        // are not accepted.
        const body = await response.json()
        setSetupPageError(body.message);
      }
    } catch (error) {
      // Display an error message if the operation fails.
      setSetupPageError(
        'Unable to validate access key ID and secret access key'
      );
    }
  }

  const smtpHandler = async (username, password) => {
    /*
    Called when the user enters their SMTP credentials.
    */
    let response;
    try {
      response = await apiObject.updateSmtpCredentials(
        username,
        password
      );
      if (response.ok) {
        setPage('smtp');
      } else {
        // Display an error message to the user if their credentials
        // are not accepted.
        const body = await response.json()
        setSetupPageError(body.message);
      }
    } catch (error) {
      // Display an error message if the operation fails.
      setSetupPageError(
        'Unable to validate SMTP credentials'
      );
    }
  }

  switch (page) {
    case 'accessKey':
      return (
        <AccessKeySetup
          errorMessage={setupPageError}
          submitHandler={accessKeyHandler}
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
      return (
        <Overview emails={emails} />
      );
  }
}

export default App
