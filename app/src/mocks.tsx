/*
Mocks the prelad functions available to the renderer process.
*/

if (!import.meta.env.PROD) {
  window.api = {
    /*
    Create functions that mock those in the preload script.
    */
    updateAccessTokens: async (accessTokenId, secretAccessToken) => {
      return true;
    },
    updateSmtpCredentials: async (username, password) => {
      return true;
    },
  }
}
