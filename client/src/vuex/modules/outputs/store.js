import fetchConfig from '../../../config/fetchConfig'
export default {
  state: {
    Output: {
      q00: false,
      q01: false,
      q02: false,
      q03: false,
      q04: false,
      q05: false,
      q06: false,
      q07: false
    }
  },
  getters: {

  },
  mutations: {
    switchOutputState: (state, data) => {
      console.log('Data: ', data)
      state.Output.q00 = data.q00
      state.Output.q01 = data.q01
      state.Output.q02 = data.q02
      state.Output.q03 = data.q03
      state.Output.q04 = data.q04
      state.Output.q05 = data.q05
      state.Output.q06 = data.q06
      state.Output.q07 = data.q07
    }
  },
  actions: {
    switchOutput: ({ commit }, outputs) => {
      console.log(JSON.stringify(outputs.outputs))
      fetch(fetchConfig.BaseURL + 'output', {
        method: 'POST',
        mode: fetchConfig.mode,
        headers: fetchConfig.headers,
        body: JSON.stringify(outputs.outputs)
      })
        .then(res => res.json())
        .then(data => {
          commit('switchOutputState', data)
        })
        .catch(error => console.log('Error: ', error))
    }
  }
}
