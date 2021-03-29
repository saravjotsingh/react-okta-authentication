const oktaAuthConfig = {
    // Note: If your app is configured to use the Implicit flow
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to add `pkce: false`
    issuer: 'https://dev-50922316.okta.com/oauth2/default',
    clientId: '0oaezjym0WS6rgQ1f5d6',
    redirectUri: window.location.origin + '/login/callback',
    // pkce:false
  };

  const oktaSignInConfig = {
    baseUrl: 'https://dev-50922316.okta.com',
    clientId: '0oaezjym0WS6rgQ1f5d6',
    redirectUri: window.location.origin + '/login/callback',
    authParams: {
      // If your app is configured to use the Implicit flow
      // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
      // you will need to uncomment the below line
    //   pkce: false
    }
  };

  export { oktaAuthConfig, oktaSignInConfig };
