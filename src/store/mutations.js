import * as types from './mutation-types'

const mutations = {
  [types.SET_CITYID](state, cityId) {
    state.cityId = cityId
  },
  [types.SET_CITYNAME](state, cityName) {
    state.cityName = cityName
  }
}

export default mutations
