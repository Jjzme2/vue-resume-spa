// authService.js
import { Auth0Client } from "@auth0/auth0-spa-js";

let auth0Client;

const initAuth0 = async () => {
  auth0Client = new Auth0Client({
    domain: process.env.VUE_APP_AUTH0_DOMAIN,
    client_id: process.env.VUE_APP_AUTH0_CLIENT_ID,
    // redirect_uri: window.location.origin,
    redirect_uri: process.env.VUE_APP_AUTH0_CALLBACK_URL,
  });

  // Handle redirect callback
  if (
    window.location.search.includes("code=") &&
    window.location.search.includes("state=")
  ) {
    await auth0Client.handleRedirectCallback();
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  return auth0Client;
};

const loginWithRedirect = () => auth0Client.loginWithRedirect();
const logout = () => auth0Client.logout({ returnTo: window.location.origin });
const getUser = () => auth0Client.getUser();
const isAuthenticated = () => auth0Client.isAuthenticated();

export { initAuth0, loginWithRedirect, logout, getUser, isAuthenticated };
