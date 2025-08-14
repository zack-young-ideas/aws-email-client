/*
Mocks the prelad functions available to the renderer process.
*/

if (!import.meta.env.PROD) {
  window.api = {
    /*
    Create functions that mock those in the preload script.
    */
    updateAccessTokens: async (accessTokenId, secretAccessToken) => {
      if ((accessTokenId === 'fakeAccessTokenId')
          && (secretAccessToken === 'fakeSecretAccessToken')) {
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
            'message': 'Invalid access token ID or secret access token.',
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
  }
}
