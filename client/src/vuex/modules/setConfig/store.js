// import router from '../../../router'
// import { API } from '../../../utils/apiCrecentials'
import fetchConfig from '../../../config/fetchConfig'

export default {
  state: {
    config: {}
  },
  getters: {
    getConfig: (state) => {
      return state.config
    }
  },
  mutations: {
    saveConfig: (state, data) => {
      console.log(data)
      state.config = data.config
      state.config.createdOn = data.createdOn
    },
    getLastConfig: (state, data) => {
      state.config = data.config
      state.config.createdOn = data.createdOn
    },
    clearConfig: (state, data) => {
      state.config = {}
    }
  },
  actions: {
    sendConfig: ({ commit }, config) => {
      console.log(config.config)
      fetch(fetchConfig.BaseURL + 'config', {
        method: 'POST',
        mode: fetchConfig.mode,
        headers: fetchConfig.headers,
        body: JSON.stringify(config.config)
      })
      .then(res => res.json())
      .then(data => {
        commit('saveConfig', data)
      })
      .catch(error => console.log('Error: ', error))
    },
    getLastConfig: ({ commit }) => {
      fetch(fetchConfig.BaseURL + 'lastconf', {
        method: 'GET',
        mode: fetchConfig.mode
      })
      .then(res => res.json())
      .then(data => {
        commit('getLastConfig', data)
      })
      .catch(error => console.log('Error: ', error))
    }
  }
}

