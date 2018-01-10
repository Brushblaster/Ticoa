// Inside here the AuthentificationService is located

import Auth0Lock from 'auth0-lock'
import EventEmitter from 'eventemitter3'
import router from './../router'
import decode from '../../node_modules/jwt-decode'
import { AUTH_CONFIG } from './auth0config'

// Export the AuthService as a class to serve it to other components of the app and get reusable
export default class AuthService {

  authenticated = this.isAuthenticated()
  authNotifier = new EventEmitter()
  admin = this.admin
  userProfile

  constructor () {
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
     // Add callback Lock's `authenticated` event
    this.lock.on('authenticated', this.setSession.bind(this))
    // Add callback for Lock's `authorization_error` event
    this.lock.on('authorization_error', error => console.log(error))
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.getAccessToken = this.getAccessToken.bind(this)
    this.getProfile = this.getProfile.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.getRole = this.getRole.bind(this)
    this.isAdmin = this.isAdmin.bind(this)
  }

  // Defining the LOCK module from Auth0 authtentification
  lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, {
    autoclose: true,
    auth: {
      responseType: 'token id_token',
      params: {
        scope: 'openid profile read:order write:order'
      },
      redirect: false
    },
    theme: {
      logo: '../../static/img/v.png',
      primaryColor: '#1B2030'
    },
    languageDictionary: {
      title: 'Ticoa'
    },
    allowSignUp: false
  })

  // defining the Method to show the lock screen
  login () {
    this.lock.show()
  }
  // handling what happens if a user is logged in
  handleAuthentication () {
    this.auth0.parseHash((err, authResult) => {
      console.log(authResult)
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
      } else if (err) {
        router.replace('/')
        console.log(err)
      }
    })
  }

  // Set a user connected session with the recieved token
  setSession (authResult) {
    if (authResult && authResult.accessToken && authResult.idToken) {
      // Set the time that the access token will expire at
      let expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime()
      )
      localStorage.setItem('access_token', authResult.accessToken)
      localStorage.setItem('id_token', authResult.idToken)
      localStorage.setItem('expires_at', expiresAt)
      this.authNotifier.emit('authChange', { authenticated: true, admin: this.isAdmin() })
      // navigate to the home route
      // router.push('/home')
    }
  }

  // Get the accesstoken from the local storage
  getAccessToken () {
    const accessToken = localStorage.getItem('access_token')
    if (!accessToken) {
      throw new Error('No access token found')
    }
    return accessToken
  }

  // Get the userprofile put of the response form Auth0
  getProfile (cb) {
    let accessToken = this.getAccessToken()
    let self = this
    this.lock.getUserInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile
      }
      cb(err, profile)
    })
  }

  // Defining the Method for logging out a user
  logout () {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    this.userProfile = null
    this.authNotifier.emit('authChange', false)
    // navigate to the home route
    router.replace('/')
  }

  // Checking if the user is Authenticated
  isAuthenticated () {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return console.log(new Date().getTime() < expiresAt)
  }

  // Checking what role the user has
  getRole () {
    const namespace = 'https://example.com'
    const idToken = localStorage.getItem('id_token')
    if (idToken) {
      return decode(idToken)[`${namespace}/role`] || null
    }
  }

  // Checking if the user is rated as a Admin user
  isAdmin () {
    return this.getRole() === 'admin'
  }
}
