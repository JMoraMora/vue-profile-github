import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: ''
  },
  getters: {
    getUserName(state) {
      return state.userName
    }
  },
  mutations: {
    setUserName(state, payload) {
      state.userName = payload
    }
  },
  actions: {
    setUserName({ commit }, payload) {
      commit('setUserName', payload)
    }
  },

})
