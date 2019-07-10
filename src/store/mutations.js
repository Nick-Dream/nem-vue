import { SET_MENUS } from './mutation_types'

export default {
  [SET_MENUS](state, payload) {
    // eslint-disable-next-line no-param-reassign
    state.menu = payload
  },
}
