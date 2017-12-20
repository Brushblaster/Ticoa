// import auth0 from 'auth0-js'
import Auth0Lock from 'auth0-lock'
import EventEmitter from 'eventemitter3'
import router from './../router'
import decode from '../../node_modules/jwt-decode'
import { AUTH_CONFIG } from './auth0config'
// import vuex from 'vuex'

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

  lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, {
    // oidcConformant: true,
    autoclose: true,
    auth: {
      // audience: AUTH_CONFIG.apiUrl,
      responseType: 'token id_token',
      params: {
        scope: 'openid profile read:messages'
      },
      redirect: false
    }
  })

  login () {
    this.lock.show()
  }

  handleAuthentication () {
    this.auth0.parseHash((err, authResult) => {
      console.log(authResult)
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        // router.replace('/home')
/*         this.store.dispatch('isAuthenticated', {
          auth: true
        }) */
      } else if (err) {
        router.replace('/')
        console.log(err)
/*         this.store.dispatch('isAuthenticated', {
          auth: false
        }) */
      }
    })
  }

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

  getAccessToken () {
    const accessToken = localStorage.getItem('access_token')
    if (!accessToken) {
      throw new Error('No access token found')
    }
    return accessToken
  }

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

  isAuthenticated () {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }

  getRole () {
    const namespace = 'https://example.com'
    const idToken = localStorage.getItem('id_token')
    if (idToken) {
      return decode(idToken)[`${namespace}/role`] || null
    }
  }

  isAdmin () {
    return this.getRole() === 'admin'
  }
}
