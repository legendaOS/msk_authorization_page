import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      errorVisible: false, //отображение компонента ошибки
      secret_key: undefined,
      login: undefined,
      errText: undefined
    }
  },
  mutations: {
    changeVisible(state) {
      state.errorVisible = !state.errorVisible
    },
    setLogin(state, new_login) {
      state.login = new_login
    },
    setSecret(state, new_secret) {
      state.secret_key = new_secret
    },
    setErrText(state, new_text) {
      state.errText = new_text
    }
  },
  getters: {
    getVisible(state) {
      return state.errorVisible
    },
    authInfo(state) {
      return `KEY:${state.secret_key} LOGIN:${state.login}`
    },
    getErrText(state) {
      return state.errText
    }
  },
  actions: {
    revertErrorComponent({ commit }) {
      commit('changeVisible')
    },
    authProfile({ commit }, payload) {
      commit('setLogin', payload.login)
      commit('setSecret', payload.secret)
    },
    changeError({ commit }, payload) {
      commit('setErrText', payload)
    }
  }
})

export default store