export default {
  namespaced: true,
  state: () => ({
    userInfo: {},
  }),
  getters: {
    loginStatus: state => Boolean(state.userInfo?.token),
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload
      if (payload) {
        localStorage.setItem('userInfo', JSON.stringify(payload))
      } else {
        localStorage.removeItem('userInfo')
      }
    },
  },
  actions: {},
}
