import { cookie } from '@/utils/index'

export default {
  namespaced: true,
  state: () => ({
    token: '',
  }),
  getters: {
    loginStatus: state => Boolean(state.token),
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
      if (payload) {
        cookie.setItem('token', payload, { expires: 1 })
      } else {
        cookie.removeItem('token')
      }
    },
  },
  actions: {},
}
