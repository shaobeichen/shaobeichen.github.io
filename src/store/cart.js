export default {
  namespaced: true,
  state: () => ({
    totalNumber: 1,
  }),
  getters: {},
  mutations: {
    setTotalNumber(state, payload) {
      state.totalNumber = payload
    },
  },
  actions: {},
}
