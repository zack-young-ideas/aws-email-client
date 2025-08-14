/*
Mocks the prelad functions available to the renderer process.
*/

if (!import.meta.env.PROD) {
  window.api = {
    /*
    Create functions that mock those in the preload script.
    */
    updateAccessKeys: async (accessKeyId, secretAccessKey) => {
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
      return {
        ok: true,
        json: async () => ({
          accessKeyId: true,
          smtpCredentials: true,
        }),
      }
    }
  }
}
