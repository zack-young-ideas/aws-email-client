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
            from: 'noreply@example.com',
            subject: 'New Message!',
            date: '2025-07-23T09:00:00.100Z',
            status: 'unread',
            content: 'Hi Test User, Welcome to Acme Corp! We\'re ...',
          }, {
            id: '2fda5dd4-f8a4-4d44-b229-0afed23a9ae5',
            from: 'noreply@example.com',
            subject: 'New Message!',
            date: '2025-07-23T09:00:00.100Z',
            status: 'unread',
            content: 'Hi Test User, Welcome to Acme Corp! We\'re ...',
          }, {
            id: '4b9dcf43-4afd-4760-9d17-58573558ea04',
            from: 'noreply@example.com',
            subject: 'New Message!',
            date: '2025-07-23T09:00:00.100Z',
            status: 'unread',
            content: 'Hi Test User, Welcome to Acme Corp! We\'re ...',
          }, {
            id: 'ab2c8a04-52be-4e9e-96a7-42c0a47a8c2f',
            from: 'noreply@example.com',
            subject: 'New Message!',
            date: '2025-07-23T09:00:00.100Z',
            status: 'unread',
            content: 'Hi Test User, Welcome to Acme Corp! We\'re ...',
          }, {
            id: '514786fa-478a-4f36-a03d-57b08c3ecff2',
            from: 'noreply@example.com',
            subject: 'New Message!',
            date: '2025-07-23T09:00:00.100Z',
            status: 'unread',
            content: 'Hi Test User, Welcome to Acme Corp! We\'re ...',
          }, {
            id: '7c952a30-75ec-4989-acf0-23586b09a86f',
            from: 'noreply@example.com',
            subject: 'New Message!',
            date: '2025-07-23T09:00:00.100Z',
            status: 'unread',
            content: 'Hi Test User, Welcome to Acme Corp! We\'re ...',
          }, {
            id: '7e182c4d-2763-40c1-8f51-15f618c14dfc',
            from: 'noreply@example.com',
            subject: 'New Message!',
            date: '2025-07-23T09:00:00.100Z',
            status: 'unread',
            content: 'Hi Test User, Welcome to Acme Corp! We\'re ...',
          }, {
            id: '5a55106e-a7ac-46fb-8d97-a1748fb93ce3',
            from: 'noreply@example.com',
            subject: 'New Message!',
            date: '2025-07-23T09:00:00.100Z',
            status: 'unread',
            content: 'Hi Test User, Welcome to Acme Corp! We\'re ...',
          }],
        }),
      }
    },
  }
}
