import server from '../server'
import { SET_MENUS } from './mutation_types'

// TODO 测试mock数据的效果
export default {
  test() {

  },
  async getMenu({ commit }) {
    const menu = await server('/servers/getMenu');
    commit(SET_MENUS, menu);
  },
  async getHome({ commit }) {
    const menu = await server('/servers/getHome');
    commit(SET_MENUS, menu);
  },
}
