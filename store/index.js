export const state = () => ({
  skeleton: null,
  page_loading: false,
  filterStep: { time: '', val: false },
  snackbar: {
    msg: 'Noget gik galt! Prøv igen.',
    color: '#0073a9',
    timeout: 5000,
  },
  attributionText: '',
})

export const mutations = {
  updateSkeleton(state, data) {
    state.skeleton = data
  },
  updateLoading(state, data) {
    state.page_loading = data
  },
  updateFitlerStep(state, data) {
    state.filterStep = data
  },
  setMessage(state, data) {
    state.snackbar = data
  },
  setAttribution(state, data) {
    state.attributionText = data
  },
}

export const getters = {
  getFitlerStep: (state) => {
    return state.filterStep
  },
  getAttribution(state) {
    return state.attributionText
  },
}
