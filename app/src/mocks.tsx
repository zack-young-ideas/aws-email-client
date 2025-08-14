/*
Mocks the prelad functions available to the renderer process.
*/

if (!import.meta.env.PROD) {
  window.api = {
    /*
    Defines functions that mock those in the preload script.
    */

    updateAccessKeys: async (accessKeyId, secretAccessKey) => {
      /*
      Updates the user's access key ID and secret access key.
      */
      if ((accessKeyId === 'fakeAccessKeyId')
          && (secretAccessKey === 'fakeSecretAccessKey')) {
        return {
          ok: true,
          json: async () => ({
            'message': 'OK',
          }),
        }
      } else {
        return {
          ok: false,
          json: async () => ({
            'message': 'Invalid access key ID or secret access key.',
          }),
        }
      }
    },

    updateSmtpCredentials: async (username, password) => {
      /*
      Updates the user's SMTP credentials.
      */
      if ((username === 'fakeUsername') && (password === 'fakePassword')) {
        return {
          ok: true,
          json: async () => ({
            'message': 'OK',
          }),
        }
      } else {
        return {
          ok: false,
          json: async () => ({
            'message': 'Invalid SMTP credentials.',
          }),
        }
      }
    },

    getSetupData: async () => {
      /*
      Indicates whether or not a user has updated their access
      key ID, secret access key, and SMTP credentials.
      */
      return {
        ok: true,
        json: async () => ({
          accessKeyId: true,
          smtpCredentials: true,
        }),
      }
    },

    getEmails: async (page = 1) => {
      /*
      Retrieves the most recent emails by page number.
      */
      return {
        ok: true,
        json: async () => ({
          emails: [{
            id: 'ee39f356-7188-4a2c-a039-93b6035cd726',
            from: 'noreply@acmecorp.com',
            subject: 'Welcome to Acme Corp!',
            date: '2025-07-23T09:00:00.100Z',
            content: 'Hi Test User, Welcome to Acme Corp! We\'re ...',
          }],
        }),
      }
    },
  }
}
